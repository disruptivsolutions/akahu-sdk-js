[akahu - v1.3.0](../README.md) / IdentitiesResource

# Class: IdentitiesResource

Utilities for requesting identity verification using OAuth2.

[https://developers.akahu.nz/docs/identity-verification](https://developers.akahu.nz/docs/identity-verification)

## Hierarchy

- `BaseResource`

  ↳ **`IdentitiesResource`**

## Table of contents

### Methods

- [buildAuthorizationUrl](IdentitiesResource.md#buildauthorizationurl)
- [get](IdentitiesResource.md#get)

## Methods

### buildAuthorizationUrl

▸ **buildAuthorizationUrl**(`params`): `string`

Build the Identity OAuth Authorization URL.

[https://developers.akahu.nz/docs/identity-verification#the-authorization-request](https://developers.akahu.nz/docs/identity-verification#the-authorization-request)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.redirect_uri` | `string` |
| `params.protocol?` | [`Protocol`](../README.md#protocol) |
| `params.host?` | `string` |
| `params.port?` | `number` |
| `params.path?` | `string` |
| `params.response_type?` | `string` |
| `params.scope?` | `string` |
| `params.state?` | `string` |

#### Returns

`string`

___

### get

▸ **get**(`code`): `Promise`<[`IdentityResult`](../README.md#identityresult)\>

Retrieve an identity result using the code/id returned after successful authorization using the
OAuth identity verification flow.

[https://developers.akahu.nz/docs/identity-verification#retrieving-identity-results-with-the-oauth-result-code](https://developers.akahu.nz/docs/identity-verification#retrieving-identity-results-with-the-oauth-result-code)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`Promise`<[`IdentityResult`](../README.md#identityresult)\>
