interface IEditerTpl{
    imgLg : string;
    htmlContent:string;
    imgSm: string;
    ctgId: string;
    projType: string;
    title: string;
    name: string;
    isDeleted: string;
    desc: string;
    lastUpdTime: string;
    createdTime: Date;
    owner: string;
    site: string;
}


class EditerTpl{
    constructor(private tpl : IEditerTpl){
        //_.extend(this, tpl);
    }
}
