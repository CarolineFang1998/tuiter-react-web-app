const navigationItem = (navigation) => {
    return(`
         <a class="list-group-item ${navigation.active? 'active':''}" href=${navigation.href}>
            <i class="${navigation.icon}"></i>
            <span class="d-none d-xl-inline">  ${navigation.title}</span>
         </a>
    `);
}

export default navigationItem;
