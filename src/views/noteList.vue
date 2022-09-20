<template>
  <article class="panel is-primary">
    <p class="panel-heading">My Notes</p>
    <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input is-warning" type="text" placeholder="Search">
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
    <b-table
      :data="data"
      :columns="columns"
      :selected.sync="selected"
      :sticky-header="true"
      :height="650"
    >
    </b-table>
  </article>
</template>

<script>
export default {
  data() {
    const data = [
      { first_name: "springboot基础.md", date: "2016-10-15 13:43:27" },
      { first_name: "java se基础.md", date: "2016-12-15 06:00:53" },
      { first_name: "SSM基础.md", date: "2016-04-26 06:26:28" },
      { first_name: "redis.md", date: "2016-04-10 10:28:46" },
    ];

    return {
      data,
      selected: data[1],
      columns: [
        // {
        //     field: 'id',
        //     // label: 'ID',
        //     width: '40',
        //     numeric: true
        // },
        {
          field: "first_name",
          // label: 'First Name',
          width: "200",
        },
        // {
        //     field: 'last_name',
        //     // label: 'Last Name',
        // },
        {
          field: "date",
          // label: 'Date',
          // centered: true
        },
        // {
        //     field: 'gender',
        //     // label: 'Gender',
        // }
      ],
    };
  },
};
</script>