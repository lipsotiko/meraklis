<template>
  <div>
    <md-toolbar md-elevation="1">
      <h1 class="md-title">EVANGELOS PONERES</h1>
    </md-toolbar>
    <md-content class="software">
      <h2 class="md-title">Software Consultant</h2>
    </md-content>
    <md-content class="woodwork">
      <h2 class="md-title">Woodworker</h2>
    </md-content>
    <md-card>
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
  </div>
</template>

<style scoped>
.linkedin-icon {
  margin-left: 3px;
  margin-right: 33px;
}
.github-icon {
  margin-left: 2px;
  margin-right: 32px;
}
.md-toolbar {
  justify-content: center;
}
.md-content {
  display: inline-flex;
  height: 500px;
  justify-content: center;
}
.md-content.software {
  width: 50%;
  border-right: .5px solid lightgrey;
}
.md-content.woodwork {
  width: 50%;
}
.md-card {
  width: 100%;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  height: 250px;
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
