'use strict'

// npm
import pify from 'pify'
import test from 'ava'

// self
import fnImp from './'

const fn = pify(fnImp)

const expected = ['ip', 'hostname', 'city', 'region', 'country', 'loc', 'org', 'postal']

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
  t.is(result.hostname, 'google-public-dns-a.google.com')
  t.is(result.city, 'Mountain View')
  t.is(result.region, 'California')
  t.is(result.country, 'US')
  t.is(result.loc, '37.3860,-122.0838')
  t.is(result.org, 'AS15169 Google Inc.')
  t.is(result.postal, '94035')
})

test('google org', async t => {
  const result = await fn('8.8.8.8/org')
  t.is(result.trim(), 'AS15169 Google Inc.')
})

test('google orga', async t => {
  // FIXME: should probably fail
  // or at least not return the string 'undefined\n'
  const result = await fn('8.8.8.8/orga')
  t.is(result, 'undefined\n')
})

test('not google', async t => {
  // FIXME: should probably fail
  // or at least not return the string 'Please provide a valid IP address'
  const result = await fn('8.8.8')
  t.is(result, 'Please provide a valid IP address')
})

test('google with token', async t => {
  // FIXME: should probably fail
  const result = await fn('8.8.8.8', 'a-token-no-really')
  t.is(result.ip, '8.8.8.8')
  t.is(result.hostname, 'google-public-dns-a.google.com')
  t.is(result.city, 'Mountain View')
  t.is(result.region, 'California')
  t.is(result.country, 'US')
  t.is(result.loc, '37.3860,-122.0838')
  t.is(result.org, 'AS15169 Google Inc.')
  t.is(result.postal, '94035')
})
