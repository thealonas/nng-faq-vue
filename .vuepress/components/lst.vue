<template>
  <div>
    <vue-good-table
      v-bind:style="{display: display}"
      :search-options="{
        enabled: true,
        placeholder: 'Поиск по группам'
      }"
      :columns="columns"
      :rows="rows"
      :line-numbers="true">
    </vue-good-table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'thx',
  data() {
    return {
      display: `none`,
      columns: [
        { label: 'Группа', field: 'name', html: true, filterOptions: { enabled: false } }
      ],
      rows: [],
    }
  },
  methods: {
    async getGroups() {
      let response = await fetch('https://twlight.likhner.com/api/groups');
      return await response.json();
    },

    getRows(groups) {
      let groupArray = [];
      groups.map(function (group) {
        let groupName = `<a href="https://vk.com/club${group.group_id}">@${group.screen_name}</a>`;
        groupArray.push({
          name: groupName
        });
      });
      return groupArray;
    }
  },
  mounted() {
    this.getGroups().then((groups) => {
      this.rows = this.getRows(groups);
      this.display = `block`;
    });
  }
}
</script>
