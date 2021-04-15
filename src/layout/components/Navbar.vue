<template>
  <div class="navbar">
    <HamBurger
        :is-active="sidebar.opened"
        class="hamburger-container"
        @toggleClick="toggleSideBar"
    />

    <BreadCrumb class="breadcrumb-container"/>

    <div class="right-menu">
      <ScreenFull/>
      <div class="inter" :title="langs ? '中文' : '英文'" @click="toggleLang">
        <img :src="langs ? ch : en"/>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="favicon"/>
          <p>{{ username }}</p>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-switch-button" @click="logout">
              {{ $t("LoginOut") }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent, onMounted} from "vue";
import HamBurger from "../../components/HamBurger";
import BreadCrumb from "../../components/BreadCrumb";
import ScreenFull from "Screenfull"
import {useMapGetters} from "../store";
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import {storageSession} from "../../utils/storage";
import {useI18n} from "vue-i18n";
import ch from "../../assets/ch.png"
import en from "../../assets/en.png"
import favicon from "../../assets/img/user.jpg"

export default {
  name: "Navbar",
  components: {
    HamBurger,
    BreadCrumb,
    ScreenFull
  },
  setup() {
    let langs = ref(true)

    const store = useStore()
    const router = useRouter()

    let username = storageSession.getItem("info").username

    const {locale} = useI18n()
    // 国际化语言切换
    const toggleLang = (): void => {
      langs.value = !langs.value;
      langs.value ? (locale.value = "ch") : (locale.value = "en");
    };

    // 退出登录
    const logout = (): void => {
      storageSession.removeItem("info");
      router.push("/login");
    };

    onMounted(()=>{
      document
          .querySelector(".el-dropdown__popper")
          ?.setAttribute("class", "resetTop");
      document
          .querySelector(".el-popper__arrow")
          ?.setAttribute("class", "hidden");
    })

    return {
      ...useMapGetters(["sidebar"]),
      toggleSideBar() {
        store.dispatch("app/toggleSideBar");
      },
      langs,
      username,
      toggleLang,
      logout,
      ch,
      en,
      favicon
    }
  }
}


</script>

<style scoped>

</style>
