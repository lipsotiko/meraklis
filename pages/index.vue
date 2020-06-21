<template>
  <div>
    <section class="hero">
      <div class="hero-text">
        <h2 class="text-h2 white--text">meraklis software consulting</h2>
      </div>
    </section>
    <v-container>
      <a name="services" />
      <section>
        <h3 class="text-h3">services</h3>
        <div class="services">
          <div class="service">
            <h4 class="text-h4">cloud</h4>
            <p>
              Whether you're ready to embark on a greenfield development
              effort, or modernize a legacy application, we can help tailor the
              latest offerings from platform providers such as Azure, AWS, or
              Heroku to meet your needs.
            </p>
          </div>
          <div class="service">
            <h4 class="text-h4">data and analytics</h4>
            <p>
              Need to turn a bunch of data into useful information that can
              influence critical business decisions? From visualizations to
              fraud detection and everything in between, we have you covered.
            </p>
          </div>
          <div class="service">
            <h4 class="text-h4">extreme programming</h4>
            <p>
              When applicable, we use this specific agile development
              methodology. Coding, testing, listening, designing...repeat.
            </p>
          </div>
        </div>
      </section>
      <a name="apps" />
      <section>
        <h3 class="text-h3">apps</h3>
        <div class="services">
          <div class="service">
            <h4 class="text-h4">secret keeper</h4>
            <p>
              A secure way to briefly share sensetive data. Try it our <a href="https://meraklis-secret-keeper.herokuapp.com" target="">here</a>.
            </p>
          </div>
          <div class="service">
            <h4 class="text-h4">video chat</h4>
            <p>
              A scalable video chat application backed by <a href="https://janus.conf.meetecho.com/">Janus</a>. Coming soon.
            </p>
          </div>
          <div class="service">
            <h4 class="text-h4">mvp</h4>
            <p>
              Have an idea for a web application? We would love to help create your minimally viable product (MVP).
            </p>
          </div>
        </div>
      </section>
      <a name="contact" />
      <section>
        <h3 class="text-h3">contact</h3>
        <p class="pa-4">
          Have a question? Contact me at
          <a href="mailto:evangelos@meraklis.io">evangelos@meraklis.io</a>
          and I'll get back to you shortly. Thank you for your interest in
          Meraklis Software Consulting.
        </p>
      </section>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style scoped>
.hero {
  width: 100%;
  height: 488px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("static/hero.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: table;
  margin: 0 auto;
  vertical-align: middle;
}

.hero-text {
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  font-size: 4rem;
}

.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.service {
  width: 332px;
  margin: 18px;
}
</style>
