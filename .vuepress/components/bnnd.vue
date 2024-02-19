<template>
  <div>
    <vue-good-table
      v-bind:style="{display: style}"
      :search-options="{
        enabled: true,
        placeholder: 'Поиск по заблокированным'
      }"
      :columns="columns"
      :rows="rows"
      :line-numbers="true">
    </vue-good-table>
  </div>
</template>

<script lang="ts">
import { getPriorityColorByInt, getPriorityHintByInt, getPriorityNameByInt } from '../data/dataHelper';

export default {
  name: 'bnnd',
  data() {
    return {
      style: `none`,
      columns: [
        { label: 'Имя и фамилия', field: 'name', html: true, filterOptions: { enabled: false } },
        { label: 'Приоритет', field: 'priority', html: true, type: 'string' },
        { label: 'Жалоба от', field: 'compliant', html: true, type: 'string' },
        { label: 'Удалён', field: 'deleted', type: 'string' }
      ],
      rows: []
    }
  },

  methods: {
    async getUsers() {
      let response = await fetch('https://twlight.likhner.com/api/bnnd');
      return await response.json();
    },

    getRows(users) {
      let userArray = [];
      users.map(function (user) {
        let userCompliant = '❌';
        if (user.bnnd_info.complaint !== undefined) {
          let complaint = user.bnnd_info.complaint;
          userCompliant = `<a href="https://vk.com/id${complaint}">${complaint}</a>`;
        }

        let userName = `<a href="https://vk.com/id${user.user_id}">${user.name}</a>`;

        let priority = 0;
        if (user.bnnd_info.priority !== undefined) {
          priority = user.bnnd_info.priority;
        }

        let stringPriority = getPriorityNameByInt(priority);
        let hintPriority = getPriorityHintByInt(priority);
        let userPriority: string = '';

        if (priority === 0) {
          userPriority = `<span title="${hintPriority}">${stringPriority}</span>`;
        } else {
          userPriority = `<span style="color: ${getPriorityColorByInt(priority)}"title="${hintPriority}">${stringPriority}</span>`
        }

        let userDeleted = '❌';
        if (!user.bnnd) {
          userDeleted = '✅';
        }

        userArray.push({
          name: userName,
          priority: userPriority,
          compliant: userCompliant,
          deleted: userDeleted
        });
      });
      return userArray;
    },
  },

  mounted() {
    this.getUsers().then(users => {
      this.rows = this.getRows(users);
      this.style = `block`;
    });
  }
}
</script>
