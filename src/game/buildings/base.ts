import { BuildingType, PartialStatEffect } from '../../types/types'

export abstract class Building {
  static id: string
  static emoji = '🏢'

  static buildingType: BuildingType
  static buildingName: string
  static description = ''

  // 시설 성능
  static tier = 1
  static price: number
  static effects: PartialStatEffect = {} as PartialStatEffect
}
