<template>
<section>
    <section class="c-user-header" style="">

      <div class="o-flexgrid  o-box o-box--large">
        <div class="o-flexgrid__item  o-box o-box--small">
          
          <div class="c-avatar">
            <img class="c-avatar__image" src="~assets/images/chn-skate-01.jpg"/>
            <span class="c-avatar__shadow"></span>
          </div>

        </div>
        <div class="o-flexgrid__item  o-box">
          <p class="u-padding-bottom-none">Jamie Mitchell</p>
          <p class="u-padding-bottom-none">Screen Interface Designer</p>
          <p class="h5">Looking for work!</p>
          
          <mlc-button-group
            :buttons="buttons"
            :size="buttonGroupSize" 
            :flush="buttonGroupFlush">
          </mlc-button-group>
          
        </div>

        <div class="o-flexgrid__item  o-box">
          <p class="h5"><icon name="at"></icon> thisguysemail@gmail.com</p>
          <p class="h5"><icon name="github"></icon> thisyguyscode</p>
          <p class="h5"><icon name="twitter"></icon> notwitter</p>
        </div>

      </div>



      <div class="" style="margin-top: -1px; background-color: #ddd; height: 1px; margin-left: 50px; margin-right: 50px;"></div>
      
      <div class="u-text-align-center  o-box o-box--small" style="text-align: center;">
        <nav>
          <ul class="o-list-inline  u-margin-bottom-none  u-padding-bottom-none  u-top-0">
            <li class="o-list-inline__item">
              <nuxt-link to="/user">User</nuxt-link>
            </li>
            <li class="o-list-inline__item">
              <nuxt-link to="/user/timeline">Timeline</nuxt-link>
            </li>
            <li class="o-list-inline__item">
              <nuxt-link to="/user/bio">Bio</nuxt-link>
            </li>
          </ul>
        </nav>        
      </div>


    </section>
    
    <section class="o-box  o-box--large">
      <nuxt-child/>
    </section>

  </section>
</template>

<script>
import mlcButtonGroup from '~components/molecules/mlc-button-group'

export default {
  data () {
    return {
      buttonGroupSize: 'small',
      buttonGroupFlush: true,
      buttons: [
        {
          icon: 'user-plus',
          text: 'Follow',
          onClick: this.consoleClick,
          state: {
            isDisabled: this.cantBeDone /* unless there's an api call or something */
          }
        },
        {
          icon: 'envelope',
          text: 'Message',
          onClick: this.consoleClick,
          state: {
            hasSuccess: this.workedPerfectly
          }
        }
      ]
    }
  },
  components: {
    mlcButtonGroup
  }
}
</script>
