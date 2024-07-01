const useGetUserInfo = () => {
    const staticUser: Record<string, any> = {
        name: {
            first: 'Ethan',
            last: 'Jones'
        },
        membership: 'Premium',
        goals: ['get ripped', 'get blue belt'],
        plans: ['Plan 1', 'Plan 2', 'Plan 3' ]
    }

    const getUserProp = (key: string) => {
        return staticUser[key]
    }

    return { getUserProp, staticUser }
};

export { useGetUserInfo }