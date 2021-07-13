<template>
  <div id="left-menu">
    <ul class="menus">
      <li
        v-for="(route, index) in routes"
        :key="index"
        :id="route.name"
        class="border-bottom-menu"
      >
        <router-link
          :id="`${route.name}${index}`"
          :to="route.children ? '' : route.path"
          @click.native="onClickItemMenu(index, route.children)"
          data-toggle="collapse"
          :aria-expanded="route.expand ? 'true' : 'false'"
          :aria-controls="route.name"
          :class="route.expand ? null : 'collapsed'"
          :active-class="route.children ? '' : 'is-selected'"
        >
          <div class="menu-icon"><font-awesome-icon :icon="route.icon" /></div>
          <span>{{ route.menuName }}</span>
          <div class="down-up-icon" v-if="route.expand && route.children">
            <font-awesome-icon icon="angle-down" />
          </div>
          <div class="down-up-icon" v-else>
            <font-awesome-icon icon="angle-right" />
          </div>
        </router-link>
        <b-collapse :id="route.menuName" v-model="route.expand">
          <div>
            <ul>
              <li
                v-for="(routeChild, idx) in route.children"
                :key="idx"
                @mouseover="onMouseoverRouteChild(route.name, index)"
                @mouseleave="onMouseleaveRouteChild(route.name, index)"
              >
                <router-link
                  :to="`${route.path}${routeChild.path}`"
                  @click.native="onClickChildItemMenu()"
                  active-class="is-selected"
                  v-show="routeChild.isShowLeftMenu !== false"
                >
                  <span>{{ routeChild.menuName }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </b-collapse>
      </li>
      <li>
        <BaseHeaderAccount />
      </li>
    </ul>
  </div>
</template>

<script>
import { removeLeftMenuAndOverlayClass } from "@/utils/headerUtils";
import BaseHeaderAccount from "@/components/common/BaseHeaderAccount";
import _isNil from "lodash/isNil";
export default {
  name: "BaseLeftMenu",
  components: {
    BaseHeaderAccount,
  },
  data() {
    return {
      routes: this.$router.options.routes.filter(
        (x) => x.isShowLeftMenu === true
      ),
    };
  },
  created() {
    this.$router.onReady(() => {
      this.routes.forEach((item) => {
        item.children &&
          item.children.forEach((childItem) => {
            if (childItem.name === this.$route.name) {
              item.expand = true;
            }
          });
      });
    });
  },
  methods: {
    onClickItemMenu(index, Childroute) {
      if (_isNil(Childroute)) {
        removeLeftMenuAndOverlayClass();
      }
      this.routes.forEach((item, i) => {
        item.expand = !item.expand;
        if (i !== index) {
          item.expand = false;
        }
      });
    },
    onClickChildItemMenu() {
      removeLeftMenuAndOverlayClass();
    },
    onMouseoverRouteChild(routeName, routeIndex) {
      document
        .getElementById(`${routeName}${routeIndex}`)
        .classList.add("is-selected");
    },
    onMouseleaveRouteChild(routeName, routeIndex) {
      document
        .getElementById(`${routeName}${routeIndex}`)
        .classList.remove("is-selected");
    },
  },
};
</script>

<style scoped></style>
