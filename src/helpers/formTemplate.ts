export type Make = 'ford' | 'fiat' | 'honda'

export type VehicleAge = '0km' | 'used'

export const formTemplate = {
  textfieldLabels: {
    name: 'nome',
    email: 'email',
    make: 'Marca do veiculo'
  },
  autocompleteOptions: [
    'ford',
    'fiat',
    'honda'
  ],
  radioOptions: [
    {
      label: '0 km',
      value: '0km'
    },
    {
      label: 'usado',
      value: 'used'
    }
  ],
  checkboxOptions: [
    {
      label: 'Ar condicionado',
      value: 1
    },
    {
      label: 'Direção hidraulica',
      value: 2
    },
    {
      label: 'Alarme',
      value: 3
    }
  ]
}