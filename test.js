'use strict'

// npm
import pify from 'pify'
import test from 'ava'

// self
import fn from './'

const expected = ['ip', 'hostname', 'city', 'region', 'country', 'loc', 'org', 'postal', 'timezone', 'readme']

test('self', async t => {
  const result = await fn()
  t.plan(2 * expected.length)
  for (let r in result) {
    t.truthy(result[r])
    t.truthy(expected.indexOf(r) !== -1)
  }
})

test('google', async t => {
  const result = await fn('8.8.8.8')
  t.is(result.ip, '8.8.8.8')
  t.is(result.hostname, 'dns.google')
  t.is(result.city, 'Mountain View')
  t.is(result.region, 'California')
  t.is(result.country, 'US')
  t.is(result.loc, '37.4056,-122.0775')
  t.is(result.org, 'AS15169 Google LLC')
  t.is(result.postal, '94043')
})

test('google org', async t => {
  const result = await fn('8.8.8.8/org')
  t.is(result.trim(), 'AS15169 Google LLC')
})

test('google orga', async t => {
  // FIXME: should probably fail
  // or at least not return the string 'undefined\n'
  const result = await fn('8.8.8.8/orga')
  t.truthy(result)
})

test('not google', async t => {
  try {
      const result = await fn('8.8.8')
  } catch (e) {
      t.is(e.message, 'Please provide a valid IP address')
  }
})

test('google with token', async t => {
  const result = await fn('8.8.8.8', 'a-token-no-really')
  // Fails due to invalid token
  t.is(result.ip, undefined)
})
