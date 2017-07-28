<template>
  <section>
    
    <section class="__quote  u-box u-box--xxxl">
      <atm-blockquote>
        <p class="u-text--xl  u-text--heading-margin  u-text--bold">
          I make digital interfaces for humans.
        </p>
        <p class="u-text--xl  u-text--low-contrast">
          It&#39;s mostly putting text in boxes.
        </p>
      </atm-blockquote>
    </section>

    <div :key="projectGroup.id" v-for="projectGroup in projectGroups">
      <ogm-project-group :projectGroup="projectGroup"></ogm-project-group>
    </div>

  </section>
</template>

<script>
import atmBlockquote from '~components/atoms/atm-blockquote.vue'
import ogmProjectGroup from '~components/organisms/ogm-project-group.vue'

export default {
  scrollToTop: false,
  layout: 'default',
  data: () => {
    return {
      projectGroups: [
        {
          name: 'SocialCops',
          logoSrc: require('~assets/images/logo-socialcops-dark.svg'),
          link: 'https://socialcops.com',
          descriptionMain: 'Based in Delhi (India), SocialCops is a young and abitious data start-up, operating largely in the social sector.',
          descriptionSub: 'They have managed to secure massive clients due to their dedication to what they call ‘Data Intelligence’ - using data effectively to glean valuable and actionable insights on a large scale. They are working on a web platform which covers the entire data pipeline, from collection to visualization. I was largely tasked with producing realistic product mockups for said platform for the corporate website, but also had a chance to work on their ‘Visualize’ product',
          projects: [
            {
              name: 'A data dashboard for national insights',
              linkTo: '/socialcops/data-dashboard',
              color: 'red',
              date: 'May - Apr 2017',
              role: 'Product Designer',
              imgSrc: require('~assets/images/data-dashboard.jpg')
            },
            {
              name: 'Product mockups / screenshots',
              date: 'xxx',
              role: 'xxx',
              imgSrc: require('~assets/images/color-generator.jpg')
            },
            {
              name: 'SCSS-based color palette generator',
              date: 'xxx',
              role: 'xxx',
              imgSrc: require('~assets/images/topography.svg')
            }
          ]
        },
        {
          name: 'trivago',
          logoSrc: require('~assets/images/logo-trivago-color.svg'),
          link: 'https://trivago.co.uk',
          descriptionMain: 'Based in Delhi (India), SocialCops is a young and abitious data start-up, operating largely in the social sector.',
          descriptionSub: 'They have managed to secure massive clients due to their dedication to what they call ‘Data Intelligence’ - using data effectively to glean valuable and actionable insights on a large scale. They are working on a web platform which covers the entire data pipeline, from collection to visualization. I was largely tasked with producing realistic product mockups for said platform for the corporate website, but also had a chance to work on their ‘Visualize’ product',
          projects: [
            {
              name: 'A data dashboard for national insights',
              linkTo: '/socialcops/data-dashboard',
              color: 'red',
              date: 'May - Apr 2017',
              role: 'Product Designer',
              imgSrc: require('~assets/images/data-dashboard.jpg')
            },
            {
              name: 'Product mockups / screenshots',
              date: 'xxx',
              role: 'xxx',
              imgSrc: require('~assets/images/color-generator.jpg')
            },
            {
              name: 'SCSS-based color palette generator',
              date: 'xxx',
              role: 'xxx',
              imgSrc: require('~assets/images/topography.svg')
            }
          ]
        }
      ]
    }
  },
  components: {
    atmBlockquote,
    ogmProjectGroup
  }
}
</script>

<style lang="scss" scoped>

/* NOTES
** None
*/

/* Import project settings
   ====================================================================== */
@import "~assets/styles/imports/imports";


/* Local variables
   ====================================================================== */


/* Base component class
   ====================================================================== */
.page-projects {
}

/* --
   ====================================================================== */

.__quote {
  @include inner-border(bottom, 1px, low);
}
</style>
