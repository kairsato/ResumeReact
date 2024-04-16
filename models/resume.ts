interface Resume {
    header: {
        name:string,
        info:string,
        attributes: Array<Attributes>
    },
    body:{
        leftSide:Array<Section>,
        rightSide:Array<Section>,
        bottom:Array<Section>,
    }
}

interface Attributes{
    icon:string,
    text:string

}

interface Section {
    title:string,
    icon:string,
    points:Array<BulletPoints>

}

interface BulletPoints{
    title:string,
    subtitle:string,
    content:string
    dates:string
}