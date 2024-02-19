<template>
  <div>
    <vue-good-table
      v-bind:style="{display: display}"
      :columns="columns"
      :rows="rows"
      :line-numbers="true">
    </vue-good-table>
  </div>
</template>

<script lang="ts">
class ThxData {
  name: string

  constructor(localName: string) {
    this.name = localName;
  }
}

export default {
  name: 'thx',
  data() {
    return {
      display: `none`,
      columns: [
        { label: 'Имя и фамилия', field: 'name', html: true, filterOptions: { enabled: false } }
      ],
      rows: []
    }
  },
  methods: {
    async getUsers() {
      let response = await fetch('https://twlight.likhner.com/api/thx');
      return response.json();
    },

    getRows(users) {
      let userArray: Array<ThxData> = [];
      users.map(function (user) {
        let userName = `<a href="https://vk.com/id${user.user_id}">${user.name}</a>`;
        userArray.push(new ThxData(userName));
      });
      return userArray;
    }
  },
  mounted() {
    this.getUsers().then((users) => {
      this.rows = this.getRows(users);
      this.display = `block`;
    });
  }
}
</script>
