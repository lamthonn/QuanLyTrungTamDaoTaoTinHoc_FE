<template>
    <div style="display:flex;">
        <div style="width: 15%">
            <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
                <MenuUnfoldOutlined v-if="state.collapsed" />
                <MenuFoldOutlined v-else />
            </a-button>
            <a-menu v-model:openKeys="state.openKeys" 
                    v-model:selectedKeys="state.selectedKeys" 
                    mode="inline" 
                    theme="light"
                    :inline-collapsed="state.collapsed" 
                    :items="items"
                    @click="hanldeClick"
                    ></a-menu>
        </div>

        <div class="contentPost">
            <div>
                <a-card class="CardPost" :bordered="false" style="width: 600px; box-shadow:2px 2px 2px 2px;display:grid;">
                    <div class="headerCard">
                        <div class="headerLeft">
                            <h5>Tên_Tài_Khoan</h5>
                            <p>đây là title</p>
                        </div>
                        <div class="headerRight">
                            <i class="fa-solid fa-ellipsis" style="font-size:30px;"></i>
                        </div>
                    </div>
                    <div class="bodyCard">
                        <div class="bodyleft">
                            <a-image
                                width="95%"
                                :src="require(`../assets/media/test.jpg`)"
                                style="border-radius:15px;"
                            />
                        </div>
                        <div class="bodyright">
                            <i class="fa-solid fa-heart" style="font-size:40px;"></i>
                            <i class="fa-regular fa-comment-dots" style="font-size:40px;"></i>
                        </div>
                    </div>
                </a-card>

                <a-card class="CardPost" :bordered="false" style="width: 600px; box-shadow:2px 2px 2px 2px;display:grid;">
                    <div class="headerCard">
                        <div class="headerLeft">
                            <h5>Tên_Tài_Khoan</h5>
                            <p>đây là title</p>
                        </div>
                        <div class="headerRight">
                            <i class="fa-solid fa-ellipsis" style="font-size:30px;"></i>
                        </div>
                    </div>
                    <div class="bodyCard">
                        <div class="bodyleft">
                            <a-image
                                width="95%"
                                :src="require(`../assets/media/test.jpg`)"
                                style="border-radius:15px;"
                            />
                        </div>
                        <div class="bodyright">
                            <i class="fa-solid fa-heart" style="font-size:40px;"></i>
                            <i class="fa-regular fa-comment-dots" style="font-size:40px;"></i>
                        </div>
                    </div>
                </a-card>
            </div>
        </div>
    </div>
    <addNews ref="xemRef" />
</template>

<script>
import { Menu, Button, Card, Image } from 'ant-design-vue';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TeamOutlined,
    MailOutlined,
    PlusCircleOutlined
} from '@ant-design/icons-vue';
import { h, reactive, ref } from 'vue';
import router from '@/router';
import addNews from '@/components/socialMedia/addNews.vue';
export default {
    name: 'socialMedia',
    components: {
        AMenu: Menu,
        AButton: Button,
        ACard:Card,
        AImage:Image,
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        TeamOutlined,
        PlusCircleOutlined,
        addNews,
    },
    setup() {
        const xemRef = ref();
        const state = reactive({
            collapsed: true,
            selectedKeys: ['2'],
            // openKeys: ['sub1'],
            // preOpenKeys: ['sub1'],
        });
        const items = reactive([
            {
                key: '1',
                icon: () => h(PlusCircleOutlined),
                label: 'Bài viết mới',
                title: 'Bài viết mới',
                
            },
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
        // watch(
        //     () => state.openKeys,
        //     (_val, oldVal) => {
        //         state.preOpenKeys = oldVal;
        //     },
        // );
        const toggleCollapsed = () => {
            state.collapsed = !state.collapsed;
            // state.openKeys = state.collapsed ? [] : state.preOpenKeys;
        };
        const hanldeClick = (key) => {
            if(key.key === '1')
            {
                addBaiViet();
            }
            else if(key.key === '2')
            {
                router.push("/socialMedia");
            }
            else if(key.key === '3')
            {
                router.push("/notification");
            }
        }
        const addBaiViet =() => {
            xemRef.value.visible = true
            console.log("running");
        }

        return{
            xemRef,
            state,
            items,

            toggleCollapsed,
            hanldeClick,
            addBaiViet,
        }
    },
}
</script>

<style>
.contentPost{
    width: 70%;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    align-items: center;
}
.headerCard{
    display: flex;
    justify-content: space-between;
}
.bodyCard{
    width: 100%;
    display: flex;
}
.bodyleft{
    width: 90%;
}
.bodyright{
    width: 10%;
    display: grid;
    justify-items: center;
    align-items: center;
    align-content: space-evenly;
}
.CardPost{
    margin-top:15px ;
}
</style>