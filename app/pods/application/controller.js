import Controller from '@ember/controller'
import { getOwner } from '@ember/application'
import { types } from 'sleeping-lion/dictionary/infusions'

export default Controller.extend({
  // Used to loop over the infusions to present the scenario infusion state
  infusionTypes: types,

  actions: {
    async reset () {
      // Destroy the Pouch database and reload the window to reboot the app
      await getOwner(this).lookup('adapter:application').db.destroy()
      window.location.reload()
    }
  }

})
