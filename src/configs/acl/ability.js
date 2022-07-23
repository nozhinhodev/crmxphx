import { Ability } from '@casl/ability'
import { initialAbility } from './initialAbility'

//  Read ability from localStorage
// * Handles auto fetching previous abilities if already logged in mentor
// ? You can update this if you store mentor abilities to more secure place
// ! Anyone can update localStorage so be careful and please update this
const userData = JSON.parse(localStorage.getItem('userData'))
const existingAbility = userData ? userData.ability : null

export default new Ability(existingAbility || initialAbility)
