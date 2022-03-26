// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const url1 = "https://vestappbr.com.br/wp-json/wc/v3"
const authUrl1 = "https://vestappbr.com.br/wp-json/jwt-auth/v1/token"
const tokenVerifyUrl1 = "https://vestappbr.com.br/wp-json/jwt-auth/v1/token/validate"

export const environment = {
  production: false,
  backend_api_url: url1,
  auth_url: authUrl1,
  token_verify_url: tokenVerifyUrl1,
  readOnlyKeys: {
      consumer_key: 'ck_4c2afcaae5839f92d55354af2ea495b2a2f40e29',
      consumer_secret: 'cs_6079e8024d18526243531c8f2c35ea24b1905893'
  },
  writableKeys: {
      consumer_key: 'ck_d0eeb83097be1e012f73bed672a1fa5e36d13137',
      consumer_secret: 'cs_35cc9f8c877297ca63c1f7769821d25a0e06ae6c'
  },

  states: [
    {value: 'AC', name: 'Acre'},
    {value: 'AL', name: 'Alagoas'},
    {value: 'AP', name: 'Amapá'},
    {value: 'AM', name: 'Amazonas'},
    {value: 'BA', name: 'Bahia'},
    {value: 'CE', name: 'Ceará'},
    {value: 'ES', name: 'Espirito Santo'},
    {value: 'GO', name: 'Goiás'},
    {value: 'MA', name: 'Maranhão'},
    {value: 'MT', name: 'Mato Grosso'},
    {value: 'MS', name: 'Mato Grosso do Sul'},
    {value: 'MG', name: 'Minas Gerais'},
    {value: 'PA', name: 'Pará'},
    {value: 'PB', name: 'Paraíba'},
    {value: 'PR', name: 'Paraná'},
    {value: 'PE', name: 'Pernanbuco'},
    {value: 'PI', name: 'Piauí'},
    {value: 'RJ', name: 'Rio de Janeiro'},
    {value: 'RN', name: 'Rio Grande do Norte'},
    {value: 'RS', name: 'Rio Grande do Sul'},
    {value: 'RO', name: 'Rondônia'},
    {value: 'RR', name: 'Roraima'},
    {value: 'SC', name: 'Santa Catarina'},
    {value: 'SP', name: 'São Paulo'},
    {value: 'SE', name: 'Sergipe'},
    {value: 'TO', name: 'Tocantins'},
    {value: 'DF', name: 'Distrito Federal'},]

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
