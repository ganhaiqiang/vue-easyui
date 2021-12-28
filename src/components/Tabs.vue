<template>
  <div>
    <!-- <h2>Scrollable Tabs</h2> -->
    <Tabs :scrollable="true" style="width:600px;height:250px">
      <TabPanel v-for="lang in languages" :key="lang" :title="lang" :closable="true">
        <div style="padding:20px">{{lang}}</div>
      </TabPanel>
    </Tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      languages: [
        'Basic',
        'Pascal',
        'C++',
        'Java',
        'JavaScript',
        'Fortran',
        'Perl',
        'Ruby',
        'Python',
        'Scratch',
        'Erlang'
      ]
    }
  }
}
</script>
