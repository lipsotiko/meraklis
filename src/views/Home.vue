<template>
  <md-card class="contact">
    <md-card-content>
      <md-list>
        <md-list-item>
          <md-icon class="md-primary">phone</md-icon>
          <span class="md-list-item-text">
            <a href="tel:443-301-9719">443-301-9719</a>
          </span>
        </md-list-item>
        <md-list-item>
          <md-icon class="md-primary">email</md-icon>
          <span class="md-list-item-text">
            <a href="mailto:evangelos.poneres@gmail.com" target="_top">evangelos.poneres@gmail.com</a>
          </span>
        </md-list-item>
        <md-list-item>
          <md-icon class="md-primary">camera</md-icon>
          <span class="md-list-item-text">
            <a href="https://bit.ly/2Jwtgvx" target="_blank">zoom</a>
          </span>
        </md-list-item>
        <md-list-item>
          <LinkedIn class="linkedin-icon" />
          <span class="md-list-item-text">
            <a
              href="https://www.linkedin.com/in/evangelos-poneres/"
              target="_blank"
            >https://www.linkedin.com/in/evangelos-poneres</a>
          </span>
        </md-list-item>
        <md-list-item>
          <GitHub class="github-icon" />
          <span class="md-list-item-text">
            <a href="https://github.com/lipsotiko" target="_blank">https://github.com/lipsotiko</a>
          </span>
        </md-list-item>
      </md-list>
    </md-card-content>
  </md-card>
</template>

<style scoped>
.contact {
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  top: 40%;
  left: 50%;
}

.md-card {
  width: 500px;
}

.linkedin-icon {
  margin-left: 2px;
  margin-right: 34px;
}
.github-icon {
  margin-left: 1px;
  margin-right: 34px;
}
</style>

<script>
import LinkedIn from '@/components/LinkedIn'
import GitHub from '@/components/GitHub'
export default {
  components: {
    GitHub,
    LinkedIn
  }
}
</script>
