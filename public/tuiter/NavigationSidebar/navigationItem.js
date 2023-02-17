const navigationItem = (navigation, active) => {
    return(`
            <a class="list-group-item ${navigation.title.toUpperCase() === active.toUpperCase()? 'active':''}" 
            href=${navigation.href}>
            <i class="${navigation.icon}"></i>
            <span class="d-none d-xl-inline">  ${navigation.title}</span>
         </a>
    `);
}

export default navigationItem;
