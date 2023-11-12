<template>
  <div style="display:flex;">
    <div style="width: 15%">
      <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
        <MenuUnfoldOutlined v-if="state.collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
      <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="inline" theme="light"
        :inline-collapsed="state.collapsed" :items="items" @click="hanldeClick"></a-menu>
    </div>
    <div style="width: 75%">
      <a-tabs>
        <a-tab-pane key="1" tab="Học Viên">
          <a-collapse v-model:activeKey="activeKey1">
            <a-collapse-panel v-for="(hv, index) in dataHocVien" :key="index" :header="hv.title">
              <div style="display:flex;">
                <p>{{ hv.description }}</p>
                <div class="roleAdmin" style="display: grid;" v-if="roleData === '1' || role === '1'">
                  <div>
                    <a-button type="primary" @click="showModalEdit">Sửa</a-button>
                    <a-modal v-model:open="openEdit" title="Sửa Thông Báo" @ok="EditData(hv.title)">
                      <a-textarea v-model:value="EditThongBao" placeholder="Chi Tiết" :rows="4" />
                    </a-modal>
                  </div>
                  <button type="button" class="btn btn-secondary">Xóa</button>
                </div>
              </div>
            </a-collapse-panel>
          </a-collapse>
        </a-tab-pane>

        <a-tab-pane key="2" tab="Giảng Viên">
          <a-collapse v-model:activeKey="activeKey2">
            <a-collapse-panel v-for="(gv, index) in dataGiangVien" :key="index" :header="gv.title">
              <p>{{ gv.description }}</p>
            </a-collapse-panel>
          </a-collapse>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import {
  Tabs,
  TabPane,
  Collapse,
  CollapsePanel,
  Modal,
  Button,
  Textarea,
  Menu
} from 'ant-design-vue/es/components'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  MailOutlined,
} from '@ant-design/icons-vue';
import { computed, h, reactive, ref } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  name: 'Notification',
  components: {
    ATabs: Tabs,
    ATabPane: TabPane,
    ACollapse: Collapse,
    ACollapsePanel: CollapsePanel,
    AModal: Modal,
    AButton: Button,
    ATextarea: Textarea,
    AMenu: Menu,

    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TeamOutlined,
    MailOutlined,
  },
  setup() {
    //thông báo
    const router = useRouter()
    const store = useStore();
    const activeKey1 = ref([]);
    const activeKey2 = ref([]);
    const dataHocVien = ref([]);
    const dataGiangVien = ref([]);
    //Role
    const role = computed(() => localStorage.getItem("ROLE"));
    const roleData = computed(() => store.state.Role);

    //EditThongBao
    const EditThongBao = ref('');
    const EditData = (title) => {
      console.log(title);
    }

    //modal
    const openEdit = ref(false);

    const showModalEdit = () => {
      openEdit.value = true;
    };

    //menu
    const state = reactive({
      collapsed: true,
      selectedKeys: ['3'],
      // openKeys: ['sub1'],
      // preOpenKeys: ['sub1'],
    });
    const items = reactive([
      {
        key: '2',
        icon: () => h(TeamOutlined),
        label: 'Xã hội',
        title: 'Xã hội',

      },
      {
        key: '3',
        icon: () => h(MailOutlined),
        label: 'Thông báo',
        title: 'Thông báo',

      },
    ]);
    const toggleCollapsed = () => {
            state.collapsed = !state.collapsed;
            // state.openKeys = state.collapsed ? [] : state.preOpenKeys;
        };
    const hanldeClick = (key) => {
        if(key.key === '2')
        {
            router.push("/socialMedia");
        }
        else if(key.key === '3')
        {
            router.push("/notification");
        }
    }

    return {
      store,
      activeKey1,
      activeKey2,
      dataHocVien,
      dataGiangVien,

      role,
      roleData,

      openEdit,
      EditThongBao,

      state,
      items,

      showModalEdit,
      EditData,
      toggleCollapsed,
      hanldeClick,
    }
  },
  mounted() {
    //lấy thông báo cho học viên
    const HVGetDataNotification = () => {
      axios.post('https://localhost:7255/api/ThongBao/GetThongBao', {
        'doiTuong': 'Học Viên'
      })
        .then(res => {
          this.dataHocVien = res.data
          console.log(res.data);
        })
        .catch(err => console.log(err))
    }
    HVGetDataNotification();

    //lấy thông báo cho giảng viên
    const GVGetDataNotification = () => {
      axios.post('https://localhost:7255/api/ThongBao/GetThongBao', {
        'doiTuong': 'Giảng Viên'
      })
        .then(res => this.dataGiangVien = res.data)
        .catch(err => console.log(err))
    }
    GVGetDataNotification();
  },
}
</script>

<style></style>