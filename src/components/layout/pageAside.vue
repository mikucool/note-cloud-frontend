<template>
  <div class="sidebar-page">
    <section class="sidebar-layout">
      <b-sidebar
        position="static"
        type="is-light"
        :fullheight="true"
        :fullwidth="false"
        :overlay="false"
        :right="false"
        :open="true"
        :expand-on-hover="true"
        :mobile="reduce"
      >
        <div class="p-1">
          <b-menu>
            <b-menu-list label="Menu">
              <b-menu-item icon="account" label="Account"> </b-menu-item>
            </b-menu-list>
            <b-menu-list>
              <b-menu-item label="Notes" icon="link"></b-menu-item>
            </b-menu-list>
            <b-menu-list>
              <b-menu-item label="Friends" icon="link"></b-menu-item>
            </b-menu-list>
            <b-menu-list label="Actions">
              <a :href="github" target="_blank">
                <b-menu-item label="Github"> </b-menu-item>
              </a>
            </b-menu-list>
          </b-menu>
        </div>
      </b-sidebar>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reduce: "reduce",
      github: "https://www.github.com/mikucool",
    };
  },
};
</script>

<style lang="scss">
.p-1 {
  padding: 1em;
}
.sidebar-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  // min-height: 100vh;
  .sidebar-layout {
    display: flex;
    flex-direction: row;
    min-height: 100%;
    // min-height: 100vh;
  }
}
@media screen and (max-width: 1023px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini-mobile {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
.is-mini-expand {
  .menu-list a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>