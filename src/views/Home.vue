<template>
  <md-card class="contact">
    <md-card-content>
      <md-list>
        <md-list-item>
          <md-icon class="md-primary">email</md-icon>
          <span class="md-list-item-text">
            <a href="mailto:evangelos.poneres@gmail.com" target="_top">e-mail</a>
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
            >linkedin</a>
          </span>
        </md-list-item>
        <md-list-item>
          <GitHub class="github-icon" />
          <span class="md-list-item-text">
            <a href="https://github.com/lipsotiko" target="_blank">git</a>
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

.linkedin-icon {
  margin-left: 2px;
  margin-right: 34px;
}
.github-icon {
  margin-right: 30.5px;
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
