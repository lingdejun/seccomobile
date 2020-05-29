<template>
  <div>
    <ul class="steps has-content-centered">
      <li class="steps-segment">
        <span class="steps-marker" />
        <div class="steps-content">
          <p class="is-size-4">Step 1</p>
        </div>
      </li>
      <li class="steps-segment">
        <span class="steps-marker" />
        <div class="steps-content">
          <p class="is-size-4">Step 2</p>
        </div>
      </li>
      <li class="steps-segment is-active">
        <span class="steps-marker" />
        <div class="steps-content">
          <p class="is-size-4">Step 3</p>
        </div>
      </li>
      <li class="steps-segment">
        <span class="steps-marker" />
        <div class="steps-content">
          <p class="is-size-4">Step 4</p>
        </div>
      </li>
      <li class="steps-segment">
        <span class="steps-marker" />
        <div class="steps-content">
          <p class="is-size-4">Step 5</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import 'bulma-steps-component/bulma-steps.sass'
export default {
  name: 'VueStep',
  props: {
    stepList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
