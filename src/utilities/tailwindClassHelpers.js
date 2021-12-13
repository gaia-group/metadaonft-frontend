import { startCase as _startCase } from 'lodash'

export const supportedSizes = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '8',
  '10',
  '12',
  '14',
  '16',
  '20',
  '24',
  '32',
  '40',
  '1/5',
]

export function squareOfSize(size) {
  if (!size || !supportedSizes.includes(size.toString())) {
    throw new TypeError(`Size ${size} is not supported`)
  }

  switch (size.toString()) {
    case '1':
      return 'w-1 h-1'
    case '2':
      return 'w-2 h-2'
    case '3':
      return 'w-3 h-3'
    case '4':
      return 'w-4 h-4'
    case '5':
      return 'w-5 h-5'
    case '6':
      return 'w-6 h-6'
    case '8':
      return 'w-8 h-8'
    case '10':
      return 'w-10 h-10'
    case '12':
      return 'w-12 h-12'
    case '14':
      return 'w-14 h-14'
    case '16':
      return 'w-16 h-16'
    case '20':
      return 'w-20 h-20'
    case '24':
      return 'w-24 h-24'
    case '32':
      return 'w-32 h-32'
    case '40':
      return 'w-40 h-40'
    case '1/5':
      return 'w-1/5 h-1/5'
    default:
      return 'w-5 h-5'
  }
}
