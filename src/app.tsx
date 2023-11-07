import { RunTimeLayoutConfig } from '@umijs/max';

export async function getInitialState(): Promise<{ name: string }> {
    return { name: '@umijs/max' };
}

const RightContent=()=>{
    return (
        <>
        right
        </>
    );
};

const Footer=()=>{
    return (
        <>
        footer
        </>
    );
};



export const layout:RunTimeLayoutConfig = () => {
    return {
        title:'低代码',
        logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        menu: {
            locale: false,
        },
        layout:'mix',
        fixSiderbar:true,
        siderWidth:200,
        rightContentRender: () => <RightContent />,
        footerRender: () => <Footer />,
        token:{
        }
    };
};