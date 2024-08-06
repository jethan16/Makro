import { useEffect, useState } from "react";

export enum TabTitles {
    home = 'home',
    progress = 'progress',
    log = 'log',
    user = 'user',
    drawer = 'drawer-dud'
}
export type activeTab = TabTitles.drawer | TabTitles.home | TabTitles.log | TabTitles.progress | TabTitles.user;

const useActiveTab = () => {
    const [activeTab, setActiveTab] = useState<activeTab>(TabTitles.home);

    return {activeTab, setActiveTab};
}

export default useActiveTab;