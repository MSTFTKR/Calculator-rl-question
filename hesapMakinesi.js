const readline=require('readline')
const rl=readline.createInterface(process.stdin, process.stdout)

var a=[]


const info=()=>{
    console.log(`
        İşlem Seç:
        1-Toplama->topla 
        2-Çıkarma->cikar
        3-Çarpma->carp
        4-Bölme->bol
        5-Log Alma->log
        6-Faktoriyel->fakt
        7-Bilgi ekranı->info
        8-Cıkış ->cik
        `)
}

const topla=()=>{
    var toplam=0;
    rl.question('Toplanacak sayilari giriniz(ornek=5+89+115+59):',(top)=>{
        let sayilar=[];
        for(let i=0; i<top.length;i++){
            if(top[i]=='-'||top[i]=='*'||top[i]=='/'){
                console.log('lütfen sadece toplama işlemi yapınız')
                return prog()
            }
        }
        sayilar=top.split('+')
        for(let i=0; i<sayilar.length;i++){
            toplam+=Number(sayilar[i])
        }
        console.log(toplam)
        return prog()
    })
    
}
const cikar=()=>{
    var sonuc=0;
    
    rl.question('Çıkarılacak sayilari giriniz(ornek=5-89-115-59):',(cik)=>{
        let sayilar=[];
        for(let i=0; i<cik.length;i++){
            if(cik[i]=='+'||cik[i]=='*'||cik[i]=='/'){
                console.log('lütfen sadece çıkarma işlemi yapınız')
                return prog()
            }
        }

        sayilar=cik.split('-')
        sonuc=sayilar[0]
        for(let i=1; i<sayilar.length;i++){
            sonuc-=Number(sayilar[i])
        }
        console.log(sonuc)
        return prog()
    })
    
}
const carp=()=>{
    var carpim=1;
    rl.question('Çarpılacak sayilari giriniz(ornek=5*89*115*59):',(carp)=>{
        let sayilar=[];
        for(let i=0; i<carp.length;i++){
            if(carp[i]=='-'||carp[i]=='+'||carp[i]=='/'){
                console.log('lütfen sadece Çarpma işlemi yapınız')
                return prog()
            }
        }
        sayilar=carp.split('*')
        for(let i=0; i<sayilar.length;i++){
            carpim*=Number(sayilar[i])
        }
        console.log(carpim)
        return prog()
    })
    
}
const bol=()=>{
    
    rl.question('Bolünecek sayilari giriniz(ornek=5/8/15/19):',(bolme)=>{
        let sayilar=[];
        for(let i=0; i<bolme.length;i++){
            if(bolme[i]=='-'||bolme[i]=='*'||bolme[i]=='+'){
                console.log('lütfen sadece bölme işlemi yapınız')
                return prog()
            }
        }
        sayilar=bolme.split('/')
        var bolum=sayilar[0]
        for(let i=1; i<sayilar.length;i++){
            bolum/=Number(sayilar[i])
        }
        console.log(bolum)
        return prog()
    })
}
const cik=()=>{
    console.log('Çıkılıyor...')
    rl.close()

}
const log=()=>{
    var sonuc=0;
    rl.question('Tabanı giriniz:',(taban)=>{
        let a=taban;
    
    rl.question('Sayıyı Giriniz:',(s1)=>{
        let b=s1
        if(a=='e'){
            sonuc=Math.log(b)
            console.log(sonuc)
            return prog();
        }else{
        sonuc= Math.log(b)/Math.log(a);
        console.log(sonuc)
        return prog();}
    })

})
}

const fakt=()=>{
    const recurs=(fak)=>{
        if(fak==1||fak==0){
            return 1;
            
        }
        else{
            return fak*recurs(fak-1)
        }
    }
    rl.question('Kaç faktoriyel?:',(fak)=>{

       console.log(recurs(fak))
       prog();
    })
    
   
}


info()
const prog=()=>{
    //regex js
    rl.question('İşlem Seçiniz:',(islem)=>{
        if(islem=='topla'){
           topla();   

        }else if(islem=='cikar'){
            cikar();    

        }else if(islem=='carp'){
            carp();         
        }
        else if(islem=='bol'){
            bol();         
        }
        else if(islem=='log'){
            log();         
        }
        else if(islem=='fakt'){
            fakt();         
        }
        else if(islem=='info'){
            info();   
            return prog()      
        }
        else if(islem=='cik'){
            cik();         
        }
        else{
            console.log('Hatalı İşlem')
            prog();
        }
    } )
    
}
prog()