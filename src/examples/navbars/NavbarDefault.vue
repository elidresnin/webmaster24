<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: { name: 'contactus' },
      color: "bg-gradient-success",
      label: "Contact Us"
    })
  },
  transparent: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  darkText: {
    type: Boolean,
    default: false
  }
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
        props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark
    }"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-0'
      "
    >
      <RouterLink
        class="navbar-brand d-none d-md-block"
        :class="[
          (props.transparent && textDark.value) || !props.transparent
            ? 'text-dark font-weight-bolder ms-sm-4'
            : 'text-white font-weight-bolder ms-sm-4'
        ]"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="m"
        data-placement="bottom"
      >
        <div
          class=""
        >
        <h3 class="mb-0">Greenify</h3>

        </div>      
        
      </RouterLink>
  
      <div
        class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
        id="navigation"
      >
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <li class="nav-item dropdown dropdown-hover mx-2">
            <RouterLink
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="[
                (props.transparent && textDark.value) || !props.transparent
                ? 'text-dark  ms-sm-4'
                : 'text-white ms-sm-4'
             ]"
              :to="{ name: 'about' }"
              rel="tooltip"
              title="Designed and Coded by Creative Tim"
              data-placement="bottom"
            >     
              About Us
            </RouterLink>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuDocs"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
          
              Solutions
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg"
              aria-labelledby="dropdownMenuDocs"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="nav-item list-group-item border-0 p-0">
                    <RouterLink class="navbar-brand d-none d-md-block" :class="[
                      (props.transparent && textDark.value) || !props.transparent
                        ? 'text-dark ms-sm-4'
                        : 'text-white ms-sm-4'
                    ]" :to="{ name: 'solar' }" rel="tooltip" title="Designed and Coded by Creative Tim"
                      data-placement="bottom">
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Solar
                      </h6>
                      <span class="text-sm text-dark" 
                        >Explore the most common Green Energy solution.</span
                      >
                    </RouterLink>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <RouterLink class="navbar-brand d-none d-md-block" :class="[
                      (props.transparent && textDark.value) || !props.transparent
                        ? 'text-dark ms-sm-4'
                        : 'text-white ms-sm-4'
                    ]" :to="{ name: 'wind' }" rel="tooltip" title="Designed and Coded by Creative Tim"
                      data-placement="bottom">
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Wind
                      </h6>
                      <span class="text-sm text-dark"
                        >Explore how Wind can power your home..</span
                      >
                    </RouterLink>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <RouterLink class="navbar-brand d-none d-md-block" :class="[
                      (props.transparent && textDark.value) || !props.transparent
                        ? 'text-dark ms-sm-4'
                        : 'text-white ms-sm-4'
                    ]" :to="{ name: 'geothermal' }" rel="tooltip" title="Designed and Coded by Creative Tim"
                      data-placement="bottom">
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Geothermal
                      </h6>
                      <span class="text-sm text-dark"
                        >Take advanage of the heath emmited by the Earth's core.</span
                      >
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <RouterLink
        class="btn btn-sm mb-0"
        :class="action.color"
        :to="action.route"
        rel="tooltip"
        title=""
        data-placement="bottom"
      >
      {{action.label}}
      </RouterLink>
            
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
