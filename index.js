
menuCari = {
    Sales : ['nama','wa'],
    User : ['nama','status'],
    Item : ['nama','harga','pcs'],
    Transaksi : ['waktu','status'],
}
error = a =>{
    console.log(a)
}
data = async (a, b, c, d) => {
    await fetch('https://smooth.my.id/bengkel/admin/' + a, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(c)
    }).then(b => b.json()).then(b).catch(d)
}
listKolom = me =>{
    console.log(me)
    a = document
    a.querySelector('section').innerHTML = ''
    b = a.createElement('div')
    b.id = 'kolomInput'
    c = a.createElement('button')
    c.id = 'search'
    d = a.createElement('span')
    d.innerHTML = 'search'
    e = a.createElement('input')
    e.id = 'caris'
    e.setAttribute('oninput','inputLoad()')
    e.setAttribute('placeholder','Cari sesuatu')
    f = a.createElement('button')
    f.setAttribute('onclick','inputButton(this)')
    f.value = me === 'Transaksi'? 'DESC' : 'ASC'
    f.id = 'sort'
    g = a.createElement('span')
    g.innerHTML = me === 'Transaksi'? 'arrow_drop_up' : 'arrow_drop_down'
    h = a.createElement('select')
    h.setAttribute('onchange','inputLoad()')
    h.id = 'totalList'
    i = a.createElement('option')
    i.value = 50
    i.innerHTML = 50
    j = a.createElement('option')
    j.innerHTML = 100
    j.value = 100
    k = a.createElement('option')
    k.innerHTML = 150
    k.value = 150
    l = a.createElement('option')
    l.innerHTML = 200
    l.value = 200
    m = a.createElement('select')
    m.setAttribute('onchange','inputLoad()')
    m.id = 'kolomList'
    b.appendChild(c)
    c.appendChild(d)
    b.appendChild(e)
    b.appendChild(f)
    f.appendChild(g)
    b.appendChild(h)
    h.appendChild(i)
    h.appendChild(j)
    h.appendChild(k)
    h.appendChild(l)
    b.appendChild(m)
    a.querySelector('section').appendChild(b)
}
inputButton = a =>{
    if(a.firstElementChild.innerHTML === 'arrow_drop_down'){
        a.firstElementChild.innerHTML = 'arrow_drop_up'
        a.value = 'DESC'
    }else{
        a.firstElementChild.innerHTML = 'arrow_drop_down'
        a.value = 'ASC'
    }
    inputLoad()
}
inputLoad = () =>{
    document.body.setAttribute('data-list',0)
    formCari()
}
listMenu = a =>{
    b = document
    b.body.setAttribute('data-menu',a.attributes['data-before'].value)
    b.body.setAttribute('data-list',0)
    listKolom(a.attributes['data-before'].value)
    for(c of menuCari[a.attributes['data-before'].value]){
        d = document.createElement('option')
        d.innerHTML = c
        d.value = c
        document.querySelector('#kolomList').appendChild(d)
    }
    formCari()
}
listSales = a =>{
    b = document
    b.querySelector('#kolom').innerHTML = ''
    c = b.createElement('div')
    c.id = 'headerTable'
    d = b.createElement('button')
    d.style.width = '40px'
    d.innerHTML = 'Id'
    e = b.createElement('button')
    e.style.width = 'calc(100% - 310px)'
    e.style.textAlign = 'left'
    e.innerHTML = 'Nama'
    f = b.createElement('button')
    f.innerHTML = 'No Telp'
    f.style.width = '150px'
    f.style.textAlign = 'left'
    g = b.createElement('div')
    g.id = 'kolomTable'
    b.querySelector('#kolom').appendChild(c)
    c.appendChild(d)
    c.appendChild(e)
    c.appendChild(f)
    b.querySelector('#kolom').appendChild(g)
    for(h of a){
        const {id,nama,nowa} = h
        i = b.createElement('div')
        i.id = 'lists'
        i.setAttribute('data-id',id)
        j = b.createElement('div')
        j.setAttribute('data-type','id')
        j.style.width = '40px'
        j.style.textAlign = 'center'
        j.innerHTML = id
        k = b.createElement('div')
        k.setAttribute('data-type','nama')
        k.style.width = 'calc(100% - 310px)'
        k.innerHTML = nama
        l = b.createElement('div')
        l.setAttribute('data-type','nowa')
        l.style.width = '150px'
        l.innerHTML = nowa
        m = b.createElement('button')
        n = b.createElement('span')
        n.style.backgroundColor = 'red'
        n.innerHTML = 'close'
        o = b.createElement('button')
        p = b.createElement('span')
        p.style.backgroundColor = 'green'
        p.innerHTML = 'chat_bubble'
        q = b.createElement('button')
        r = b.createElement('span')
        r.style.backgroundColor = 'blue'
        r.innerHTML = 'info'
        g.appendChild(i)
        i.appendChild(j)
        i.appendChild(k)
        i.appendChild(l)
        i.appendChild(q)
        q.appendChild(r)
        i.appendChild(o)
        o.appendChild(p)
        i.appendChild(m)
        m.appendChild(n)
    }
}
listUser = a =>{
    b = document
    b.querySelector('#kolom').innerHTML = ''
    c = b.createElement('div')
    c.id = 'headerTable'
    d = b.createElement('button')
    d.style.width = '40px'
    d.innerHTML = 'Id'
    e = b.createElement('button')
    e.style.width = 'calc(100% - 460px)'
    e.style.textAlign = 'left'
    e.innerHTML = 'Nama'
    f = b.createElement('button')
    f.innerHTML = 'NO telp'
    f.style.width = '150px'
    f.style.textAlign = 'left'
    f1 = b.createElement('button')
    f1.innerHTML = 'Status'
    f1.style.width = '150px'
    f1.style.textAlign = 'left'
    g = b.createElement('div')
    g.id = 'kolomTable'
    b.querySelector('#kolom').appendChild(c)
    c.appendChild(d)
    c.appendChild(e)
    c.appendChild(f1)
    c.appendChild(f)
    b.querySelector('#kolom').appendChild(g)
    for(h of a){
        const {id,nama,status,nowa} = h
        i = b.createElement('div')
        i.id = 'lists'
        i.setAttribute('data-id',id)
        j = b.createElement('div')
        j.setAttribute('data-type','id')
        j.style.width = '40px'
        j.style.textAlign = 'center'
        j.innerHTML = id
        k = b.createElement('div')
        k.setAttribute('data-type','nama')
        k.style.width = 'calc(100% - 460px)'
        k.innerHTML = nama
        l = b.createElement('div')
        l.setAttribute('data-type','status')
        l.style.width = '150px'
        l.innerHTML = !parseInt(status)? 'Admin' : 'Karyawan'
        l1 = b.createElement('div')
        l1.setAttribute('data-type','nowa')
        l1.style.width = '150px'
        l1.innerHTML = nowa
        m = b.createElement('button')
        n = b.createElement('span')
        n.style.backgroundColor = 'red'
        n.innerHTML = 'close'
        o = b.createElement('button')
        p = b.createElement('span')
        p.style.backgroundColor = 'green'
        p.innerHTML = 'chat_bubble'
        q = b.createElement('button')
        r = b.createElement('span')
        r.style.backgroundColor = 'blue'
        r.innerHTML = 'info'
        g.appendChild(i)
        i.appendChild(j)
        i.appendChild(k)
        i.appendChild(l)
        i.appendChild(l1)
        i.appendChild(q)
        q.appendChild(r)
        i.appendChild(o)
        o.appendChild(p)
        i.appendChild(m)
        m.appendChild(n)
    }
}
listItem = a =>{
    b = document
    b.querySelector('#kolom').innerHTML = ''
    c = b.createElement('div')
    c.id = 'headerTable'
    d = b.createElement('button')
    d.style.width = '100px'
    d.innerHTML = 'Id'
    e = b.createElement('button')
    e.style.width = 'calc(100% - 730px)'
    e.style.textAlign = 'left'
    e.innerHTML = 'Nama'
    f = b.createElement('button')
    f.innerHTML = 'Harga 1'
    f.style.width = '150px'
    f.style.textAlign = 'left'
    f1 = b.createElement('button')
    f1.innerHTML = 'Harga 2'
    f1.style.width = '150px'
    f1.style.textAlign = 'left'
    f2 = b.createElement('button')
    f2.innerHTML = 'Harga 3'
    f2.style.width = '150px'
    f2.style.textAlign = 'left'
    f3 = b.createElement('button')
    f3.innerHTML = 'Pcs/Box'
    f3.style.width = '100px'
    g = b.createElement('div')
    g.id = 'kolomTable'
    b.querySelector('#kolom').appendChild(c)
    c.appendChild(d)
    c.appendChild(e)
    c.appendChild(f)
    c.appendChild(f1)
    c.appendChild(f2)
    c.appendChild(f3)
    b.querySelector('#kolom').appendChild(g)
    for(h of a){
        const {no,id,nama,harga1,harga2,harga3,jumlah} = h
        i = b.createElement('div')
        i.id = 'lists'
        i.setAttribute('data-id',no)
        j = b.createElement('div')
        j.setAttribute('data-type','id')
        j.style.width = '100px'
        j.style.textAlign = 'center'
        j.innerHTML = id
        k = b.createElement('div')
        k.setAttribute('data-type','nama')
        k.style.width = 'calc(100% - 730px)'
        k.innerHTML = nama
        l = b.createElement('div')
        l.setAttribute('data-type','harga1')
        l.style.width = '150px'
        l.innerHTML = harga1
        l1 = b.createElement('div')
        l1.setAttribute('data-type','harga2')
        l1.style.width = '150px'
        l1.innerHTML = harga2
        l2 = b.createElement('div')
        l2.setAttribute('data-type','harga3')
        l2.style.width = '150px'
        l2.innerHTML = harga3
        l3 = b.createElement('div')
        l3.setAttribute('data-type','total')
        l3.style.width = '100px'
        l3.innerHTML = jumlah
        m = b.createElement('button')
        n = b.createElement('span')
        n.style.backgroundColor = 'red'
        n.innerHTML = 'close'
        q = b.createElement('button')
        r = b.createElement('span')
        r.style.backgroundColor = 'blue'
        r.innerHTML = 'info'
        g.appendChild(i)
        i.appendChild(j)
        i.appendChild(k)
        i.appendChild(l)
        i.appendChild(l1)
        i.appendChild(l2)
        i.appendChild(l3)
        i.appendChild(q)
        q.appendChild(r)
        i.appendChild(m)
        m.appendChild(n)
    }
}
listTransaksi = a =>{
    b = document
    b.querySelector('#caris').setAttribute('disabled',true)
    b.querySelector('#kolom').innerHTML = ''
    c = b.createElement('div')
    c.id = 'headerTable'
    d = b.createElement('button')
    d.style.width = 'calc(100% - 580px)'
    d.innerHTML = 'Tanggal'
    d.style.textAlign = 'left'
    e = b.createElement('button')
    e.style.width = '350px'
    e.style.textAlign = 'left'
    e.innerHTML = 'Sales'
    f = b.createElement('button')
    f.innerHTML = 'Status'
    f.style.width = '150px'
    f.style.textAlign = 'left'
    g = b.createElement('div')
    g.id = 'kolomTable'
    b.querySelector('#kolom').appendChild(c)
    c.appendChild(d)
    c.appendChild(e)
    c.appendChild(f)
    b.querySelector('#kolom').appendChild(g)
    for(h of a){
        const {id,waktu,sales,status} = h
        i = b.createElement('div')
        i.id = 'lists'
        i.setAttribute('data-id',id)
        j = b.createElement('div')
        j.setAttribute('data-type','waktu')
        j.style.width = 'calc(100% - 580px)'
        j.style.textAlign = 'center'
        j.innerHTML = new Intl.DateTimeFormat('id-ID', { dateStyle: 'full', timeStyle: 'medium' }).format(new Date(parseInt(waktu) * 1000))
        k = b.createElement('div')
        k.setAttribute('data-type','sales')
        k.style.width = '350px'
        k.innerHTML = sales
        l = b.createElement('div')
        l.setAttribute('data-type','status')
        l.style.width = '150px'
        l.innerHTML = !parseInt(status)? 'Masuk' : 'Keluar'
        m = b.createElement('button')
        n = b.createElement('span')
        n.style.backgroundColor = 'red'
        n.innerHTML = 'close'
        q = b.createElement('button')
        r = b.createElement('span')
        r.style.backgroundColor = 'blue'
        r.innerHTML = 'info'
        g.appendChild(i)
        i.appendChild(j)
        i.appendChild(k)
        i.appendChild(l)
        i.appendChild(q)
        q.appendChild(r)
        i.appendChild(m)
        m.appendChild(n)
    }
}
formCari = () =>{
    data(`list${document.body.attributes['data-menu'].value}.php`,eval(`list${document.body.attributes['data-menu'].value}`),{
        a:parseInt(document.body.attributes['data-list'].value),
        b:document.querySelector('#caris').value,
        c:document.querySelector('#kolomList').value,
        d:document.querySelector('#sort').value,
        e:parseInt(document.querySelector('#totalList').value)
    },error)
}
menu = a =>{
    b = a.firstElementChild.innerText
    if(b === 'expand_less'){
        for(c of document.querySelectorAll('#menu')){
            c.style.display = 'block'
        }
        a.firstElementChild.innerHTML = 'expand_more'
    }else{
        for(c of document.querySelectorAll('#menu')){
            c.style.display = 'none'
        }
        a.firstElementChild.innerHTML = 'expand_less'
    }
}
kembaliForm = () =>{
    a = document
    if(a.querySelectorAll('#form').length){
        a.querySelector('#form').remove()
    }
    if(a.querySelectorAll('#formTransaksi').length){
        a.querySelector('#formTransaksi').remove()
    }
}
kolom = a =>{
    kembaliForm()
    b = a.attributes['data-after'].value
    c = document
    d = c.createElement('form')
    d.name = b
    e = c.createElement('section')
    e.id = 'form'
    f = c.createElement('div')
    g = c.createElement('label')
    h = c.createElement('input')
    h.setAttribute('name','a')
    i = c.createElement('div')
    j = c.createElement('label')
    k = c.createElement('input')
    k.setAttribute('name','b')
    l = c.createElement('div')
    m = c.createElement('label')
    n = c.createElement('input')
    n.setAttribute('name','c')
    o = c.createElement('div')
    p = c.createElement('label')
    q = c.createElement('input')
    q.setAttribute('name','d')
    r = c.createElement('div')
    s = c.createElement('label')
    t = c.createElement('input')
    t.setAttribute('name','e')
    d.appendChild(f)
    f.appendChild(g)
    f.appendChild(h)
    d.appendChild(i)
    i.appendChild(j)
    i.appendChild(k)
    switch(b) {
        case 'Item':
            g.innerHTML = 'Id'
            h.setAttribute('required',true)
            h.setAttribute('type','text')
            h.setAttribute('placeholder','Id ' + b)
            j.innerHTML = 'Nama'
            k.setAttribute('required',true)
            k.setAttribute('type','text')
            k.setAttribute('placeholder','Nama ' + b)
            m.innerHTML = 'Harga 1'
            n.setAttribute('type','tel')
            n.setAttribute('placeholder','Harga 1 ' + b)
            p.innerHTML = 'Harga 2'
            q.setAttribute('type','tel')
            q.setAttribute('placeholder','Harga 2 ' + b)
            s.innerHTML = 'Harga 3'
            t.setAttribute('type','tel')
            t.setAttribute('placeholder','Harga 3 ' + b)
            d.appendChild(l)
            l.appendChild(m)
            l.appendChild(n)
            d.appendChild(o)
            o.appendChild(p)
            o.appendChild(q)
            d.appendChild(r)
            r.appendChild(s)
            r.appendChild(t)
            break;
        case 'Sales':
            g.innerHTML = 'Nama'
            h.setAttribute('required',true)
            h.setAttribute('type','text')
            h.setAttribute('placeholder','Nama ' + b)
            j.innerHTML = 'No Telp'
            k.setAttribute('type','tel')
            k.setAttribute('placeholder','No Telp ' + b)
            break;
        case 'User':
            g.innerHTML = 'Nama'
            h.setAttribute('required',true)
            h.setAttribute('type','text')
            h.setAttribute('placeholder','Nama ' + b)
            j.innerHTML = 'No telp'
            k.setAttribute('type','tel')
            k.setAttribute('placeholder','No telp ' + b)
            m.innerHTML = 'Email'
            n.setAttribute('required',true)
            n.setAttribute('type','email')
            n.setAttribute('placeholder','Email ' + b)
            p.innerHTML = 'Password'
            q.setAttribute('required',true)
            q.setAttribute('type','text')
            q.setAttribute('placeholder','Password ' + b)
            s.innerHTML = 'Status'
            t = c.createElement('select')
            t.setAttribute('name','e')
            u = c.createElement('option')
            u.innerHTML = 'Admin'
            u.setAttribute('value','0')
            v = c.createElement('option')
            v.setAttribute('value','1')
            v.innerHTML = 'Karyawan'
            d.appendChild(l)
            l.appendChild(m)
            l.appendChild(n)
            d.appendChild(o)
            o.appendChild(p)
            o.appendChild(q)
            d.appendChild(r)
            r.appendChild(s)
            r.appendChild(t)
            t.appendChild(u)
            t.appendChild(v)
            break;
    }
    u = c.createElement('div')
    u.id = 'button'
    v = c.createElement('button')
    v.style.backgroundColor = '#f66'
    v.innerHTML = 'Kembali'
    v.setAttribute('type','Button')
    v.setAttribute('onclick','kembaliForm()')
    w = c.createElement('div')
    w.id = 'button'
    x = c.createElement('button')
    x.style.backgroundColor = '#66f'
    x.setAttribute('type','submit')
    x.innerHTML = 'Simpan'
    d.appendChild(w)
    w.appendChild(x)
    d.appendChild(u)
    u.appendChild(v)
    e.appendChild(d)
    c.body.appendChild(e)
    tambah()
}
index = () =>{
    if(!localStorage.getItem('masuk')){
        a = document
        b = a.body
        b.innerHTML = ''
        c = a.createElement('section')
        c.id = 'sectionLogin'
        d = a.createElement('form')
        d.id = 'login'
        d.name = 'login'
        e = a.createElement('div')
        e.id = 'loginTitle'
        e.setAttribute('data-before','login')
        e.setAttribute('data-after','Masukan Email dan Password')
        f = a.createElement('div')
        g = a.createElement('label')
        g.innerHTML = 'Username'
        h = a.createElement('input')
        h.setAttribute('required',true)
        h.setAttribute('type','text')
        h.setAttribute('placeholder','Username')
        h.setAttribute('name','a')
        i = a.createElement('div')
        j = a.createElement('label')
        j.innerHTML = 'Password'
        k = a.createElement('input')
        k.setAttribute('required',true)
        k.setAttribute('type','password')
        k.setAttribute('placeholder','Password')
        k.setAttribute('name','b')
        d.appendChild(e)
        d.appendChild(f)
        f.appendChild(g)
        f.appendChild(h)
        d.appendChild(i)
        i.appendChild(j)
        i.appendChild(k)
        w = a.createElement('div')
        x = a.createElement('button')
        x.setAttribute('type','submit')
        x.innerHTML = 'Masuk'
        d.appendChild(w)
        w.appendChild(x)
        c.appendChild(d)
        b.appendChild(c)
        document.querySelector('form').addEventListener('submit',function(a){
            a.preventDefault()
            data('login.php',load,{
                a : this.a.value,
                b : this.b.value,
            },error)
        })
    }
}
tambah = () =>{
    document.querySelector('form').addEventListener('submit',function(a) {
        a.preventDefault()
        b = `tambah${a.target.attributes.name.value}.php`
        c = {
            a:a.target.a.value,
            b:a.target.b.value,
            c:!a.target.c? '' : a.target.c.value,
            d:!a.target.d? '' : a.target.d.value,
            e:!a.target.e? '' : a.target.e.value,
        }
        data(b,kembaliForm,c,error)
    })
}
keluar = () =>{
    localStorage.clear(); 
    window.location.reload()
}
load = async a =>{
    for(b in a){
        await localStorage.setItem(b, a[b])
    }
    window.location.reload()
}
buttonNavCari = function(a){
    for(b of document.querySelectorAll(`#${a.id}`)){
        b.className = ''
    }
    a.className = 'active'
    document.querySelector('#navCari').name = a.attributes['data-before'].value
    document.querySelector('#navCariInput').setAttribute('placeholder','Cari ' + a.attributes['data-before'].value)
    document.querySelector('#navCariInput').value = ''
    document.querySelector('#kolomNav').innerHTML = ''
}
inputNavCari = () =>{
    kolomNav.innerHTML = ''
    dataInputNavCari()
}
setSeles = a =>{
    inputKolomSales.setAttribute('data-id',a.attributes['data-id'].value)
    inputKolomSales.value = a.innerHTML
    inputKolomSales.name = 'sales'
}
removePar = a =>{
    a.parentElement.remove()
}
setItem = a =>{
    b = document
    c = b.createElement('div')
    c.id = 'itemList'
    c.setAttribute('data-id','new')
    d = b.createElement('input')
    d.className = 'id'
    d.setAttribute('placeholder','id Item')
    d.setAttribute('required',true)
    e = b.createElement('input')
    e.setAttribute('placeholder','nama Item')
    e.setAttribute('required',true)
    e.className = 'nama'
    f = b.createElement('input')
    f.setAttribute('required',true)
    f.setAttribute('placeholder','harga Item')
    f.className = 'harga'
    g = b.createElement('input')
    g.setAttribute('placeholder','jumlah Item')
    g.setAttribute('required',true)
    g.className = 'angka'
    h = b.createElement('button')
    h.setAttribute('type','button')
    h.setAttribute('onclick','removePar(this)')
    i = b.createElement('span')
    i.innerHTML = 'close'
    c.appendChild(d)
    c.appendChild(e)
    c.appendChild(f)
    c.appendChild(g)
    c.appendChild(h)
    h.appendChild(i)
    kolomBarang.appendChild(c)
    if(typeof a === 'object'){
        c.setAttribute('data-id',a.attributes['data-no'].value)
        d.value = a.attributes['data-id'].value
        d.setAttribute('disabled',true)
        e.value = a.innerHTML
        e.setAttribute('disabled',true)
    }
}
dataInputNavCari = () =>{
    if(document.querySelectorAll('#kolomNavNext').length){
        document.querySelector('#kolomNavNext').remove()
    }
    data(`cari${document.querySelector('#navCari').name}.php`,b => {
        if(typeof b === 'string'){
            return false
        }
        c = document
        switch(c.querySelector('#navCari').name) {
            case 'Sales':
                for(d of b){
                    const {id,nama} = d
                    e = c.createElement('div')
                    e.id = 'kolomNavList'
                    e.setAttribute('data-id',id)
                    e.setAttribute('onclick','setSeles(this)')
                    e.innerHTML = nama
                    kolomNav.appendChild(e)
                }
                break;
            case 'Item':
                for(d of b){
                    const {no,id,nama} = d
                    e = c.createElement('div')
                    e.id = 'kolomNavList'
                    e.setAttribute('data-id',id)
                    e.setAttribute('data-no',no)
                    e.setAttribute('onclick','setItem(this)')
                    e.innerHTML = nama
                    kolomNav.appendChild(e)
                }
                break;
        }
        f = c.createElement('button')
        f.setAttribute('onclick','dataInputNavCari()')
        f.id = 'kolomNavNext'
        f.innerHTML = 'next'
        kolomNav.appendChild(f)
    },{
        a:document.querySelectorAll('#kolomNavList').length,
        b:navCariInput.value
    },error)
}
newSales = a =>{
    a.name = 'new'
}
transaksi = () =>{
    kembaliForm()
    a = document
    b = a.createElement('div')
    b.id = 'formTransaksi'
    c = a.createElement('section')
    c.id = 'menuformTransaksi'
    d = a.createElement('section')
    d.id = 'secformTransaksi'
    e = a.createElement('nav')
    e.id = 'navMenu'
    f = a.createElement('button')
    f.setAttribute('onclick','buttonNavCari(this)')
    f.setAttribute('data-before','Item')
    f.id = 'buttonNav'
    g = a.createElement('span')
    g.innerHTML = 'inventory'
    h = a.createElement('button')
    h.setAttribute('onclick','buttonNavCari(this)')
    h.setAttribute('data-before','Sales')
    h.id = 'buttonNav'
    h.className = 'active'
    i = a.createElement('span')
    i.innerHTML = 'manage_accounts'
    j = a.createElement('form')
    j.id = 'navCari'
    j.name = 'Sales'
    k = a.createElement('button')
    k.setAttribute('type','button')
    k.id = 'buttonInputR'
    l = a.createElement('span')
    l.innerHTML = 'search'
    m = a.createElement('input')
    m.setAttribute('oninput','inputNavCari(this)')
    m.id = 'navCariInput'
    m.name = 'a'
    m.setAttribute('type','text')
    m.setAttribute('placeholder','Cari Sales')
    n = a.createElement('button')
    n.setAttribute('type','reset')
    n.id = 'buttonInputL'
    o = a.createElement('span')
    o.innerHTML = 'close'
    p = a.createElement('div')
    p.id = 'kolomNav'
    q = a.createElement('form')
    q.id = 'kolomForm'
    r = a.createElement('div')
    r.id = 'kolomSales'
    r.setAttribute('data-before',"Sales :")
    s = a.createElement('div')
    s.id = 'kolomBarang'
    s.setAttribute('data-before',"List Item :")
    t = a.createElement('input')
    t.name = 'new'
    t.setAttribute('type','text')
    t.setAttribute('oninput','newSales(this)')
    t.setAttribute('placeholder','New Sales')
    t.setAttribute('required',true)
    t.id = 'inputKolomSales'
    u = a.createElement('button')
    u.setAttribute('type','button')
    u.setAttribute('onclick','setItem(true)')
    u.id = 'kolomButton'
    u.innerHTML = 'Tambah item'
    v = a.createElement('div')
    v.id = 'kolomSubmit'
    w = a.createElement('button')
    w.setAttribute('type','button')
    w.setAttribute('onclick','kembaliForm()')
    w.innerHTML = 'kembali'
    x = a.createElement('button')
    x.setAttribute('type','submit')
    x.innerHTML = 'simpan'
    a.body.appendChild(b)
    b.appendChild(c)
    b.appendChild(d)
    c.appendChild(e)
    e.appendChild(f)
    f.appendChild(g)
    e.appendChild(h)
    h.appendChild(i)
    e.appendChild(j)
    j.appendChild(k)
    k.appendChild(l)
    j.appendChild(m)
    j.appendChild(n)
    n.appendChild(o)
    c.appendChild(p)
    d.appendChild(q)
    q.appendChild(r)
    q.appendChild(s)
    r.appendChild(t)
    q.appendChild(u)
    q.appendChild(v)
    v.appendChild(w)
    v.appendChild(x)
    a.querySelector('#navCari').addEventListener('submit',function(a){
        a.preventDefault()
    })
    a.querySelector('#kolomForm').addEventListener('submit',function(a){
        a.preventDefault()
        if(!document.querySelectorAll('#itemList').length){
            alert('Item Barang Kosong')
            return false
        }else{
            setTransaksi()
        }
    })
}
setTransaksi = async () =>{
    b = {}
    switch(inputKolomSales.name) {
        case 'new':
            await data('tambahSales.php',x => b['a'] = x.id,{a:inputKolomSales.value},error)
            break;
        case 'sales':
            b['a'] = inputKolomSales.attributes['data-id'].value
            break;
    }
    c = []
    for(d of document.querySelectorAll('#itemList')){
        e = {
            harga : d.childNodes[2].value,
            jumlah : d.childNodes[3].value
        }
        switch(d.attributes['data-id'].value) {
            case 'new':
                await data('tambahItem.php',x => e['no'] = x.no,{
                    a:d.childNodes[0].value,
                    b:d.childNodes[1].value
                },error)
                break;
            default:
                e['no'] = d.attributes['data-id'].value
                break;
        }
        c.push(e)
    }
    b['b'] = c
    b['c'] = 0
    data('transaksi.php','',b,error)
}
index()