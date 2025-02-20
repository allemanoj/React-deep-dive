import {atom, selector} from "recoil";

export const networkAtom = atom({
    key :"networkAtom",
    default : 102
});

export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
});
export const notificationAtom = atom({
    key : "notificationAtom",
    default:12
});
export const messagingAtom = atom({
    key : "messagingAtom",
    default:0
});

export const totalNotificationCount = selector({
    key:"totalNotificationCount",
    get:({get}) => {
        const newtWorkCount = get(networkAtom);
        const jobsCount = get(jobsAtom);
        //console.log(jobsCount);
        const notificationCount = get(notificationAtom);
        const messagingCount = get(messagingAtom);
        return newtWorkCount + jobsCount + notificationCount + messagingCount;
    }
})