window.STORE_PRODUCTS = [
  {id:'petra',name:'Lattafa Petra EDP',brand:'Lattafa',volume:'100 ml',price:289,gender:'Feminino',badge:'Importado',tone:'Floral frutado',featured:true},
  {id:'sakeena',name:'Lattafa Sakeena EDP',brand:'Lattafa',volume:'100 ml',price:312,gender:'Feminino',badge:'Importado',tone:'Frutado gourmand',featured:true},
  {id:'durrat',name:'Durrat Al Aroos EDP',brand:'Al Wataniah',volume:'85 ml',price:246,gender:'Feminino',badge:'Importado',tone:'Floral oriental',featured:false},
  {id:'oud-mystery',name:'Oud Mystery Intense EDP',brand:'Al Wataniah',volume:'100 ml',price:359,gender:'Masculino',badge:'Importado',tone:'Amadeirado oriental',featured:false},
  {id:'salvo',name:'Maison Alhambra Salvo EDP',brand:'Maison Alhambra',volume:'100 ml',price:289,gender:'Masculino',badge:'Mais vendido',tone:'Aromático fresco',featured:true},
  {id:'club-nuit',name:'Club de Nuit Intense Man',brand:'Armaf',volume:'105 ml',price:419,gender:'Masculino',badge:'Mais vendido',tone:'Amadeirado cítrico',featured:true},
  {id:'sabah',name:'Sabah Al Ward EDP',brand:'Al Wataniah',volume:'100 ml',price:259,gender:'Feminino',badge:'Importado',tone:'Floral adocicado',featured:false},
  {id:'fakhar',name:'Fakhar Extrait Gold',brand:'Lattafa',volume:'100 ml',price:369,gender:'Masculino',badge:'Última unidade',tone:'Amadeirado aromático',accords:'Âmbar · Tuberosa · Floral branco · Almíscar · Cítricos · Especiarias quentes · Madeiras · Couro',image:'assets/products/fakhar-gold.jpeg',stock:1,featured:false},
  {id:'yara',name:'Yara Rosa',brand:'Lattafa',volume:'100 ml',price:299,gender:'Feminino',badge:'Última unidade',tone:'Doce e cremoso',accords:'Doce · Baunilha · Atalcado · Tropical · Frutado · Almíscar · Floral · Cítricos',image:'assets/products/yara-rosa.jpeg',stock:1,featured:true},
  {id:'queen',name:'Queen of Arabia',brand:'Importado',volume:'100 ml',price:569,gender:'Feminino',badge:'2 unidades',tone:'Doce floral branco',accords:'Doce · Tuberosa · Baunilha · Coco · Floral branco',notes:'Tuberosa · Rum · Coco · Ameixa · Baunilha · Almíscar · Âmbar',use:'Versátil para o dia a dia, encontros, eventos, trabalho e ocasiões especiais.',image:'assets/products/queen-of-arabia.jpeg',stock:2,featured:true},
  {id:'haya',name:'Haya',brand:'Lattafa',volume:'100 ml',price:347,gender:'Feminino',badge:'2 unidades',tone:'Floral frutado',image:'assets/products/haya.jpeg',stock:2,featured:false},
  {id:'asad-bourbon',name:'Asad Bourbon',brand:'Lattafa',volume:'100 ml',price:359,gender:'Masculino',badge:'Última unidade',tone:'Oriental especiado',accords:'Baunilha · Cacau · Doce · Lavanda · Especiado fresco · Aromático · Âmbar · Especiado quente · Atalcado',image:'assets/products/asad-bourbon-nova.webp',stock:1,featured:true},
  {id:'musamam',name:'Musamam White Intense',brand:'Lattafa',volume:'100 ml',price:464,gender:'Unissex',badge:'Última unidade',tone:'Oriental floral',accords:'Amadeirado · Especiado quente · Coco · Doce · Cítricos · Atalcado · Âmbar · Floral amarelo · Almiscarado · Baunilha',image:'assets/products/musamam-white-intense.webp',stock:1,featured:false},
  {id:'asad-black',name:'Asad Black',brand:'Lattafa',volume:'100 ml',price:329,gender:'Masculino',badge:'Última unidade',tone:'Oriental',accords:'Âmbar · Especiado fresco · Amadeirado · Baunilha · Especiado quente · Doce · Tabaco · Atalcado · Patchouli · Balsâmico',image:'assets/products/asad-black.jpg',stock:1,featured:true},
  {id:'azzaro',name:'Azzaro',brand:'Azzaro',volume:'100 ml',price:329,gender:'Masculino',badge:'Importado',tone:'Aromático marcante',featured:false},
  {id:'kit-yara-mini',name:'Kit Yara Mini',brand:'Lattafa',volume:'Kit',price:239,gender:'Feminino',badge:'Kit',tone:'Seleção Yara',featured:false},
  {id:'khamrah',name:'Khamrah',brand:'Lattafa',volume:'100 ml',price:345,gender:'Unissex',badge:'Mais vendido',tone:'Gourmand especiado',featured:true}
];
window.STORE_DECANTS = ['Yara Rosa','Queen of Arabia','Haya','Asad Bourbon','Asad Black','Durrat Al Aroos','Maison Alhambra Salvo','Sabah Al Ward'].map((name,i)=>({id:'decant-'+i,name:'Decante '+name,brand:'5 ml',volume:'5 ml',price:35,type:'decant'}));
window.STORE_KITS = [
  {id:'kit-feminino',name:'Kit Feminino',description:'3 fragrâncias femininas selecionadas',basePrice:947},
  {id:'kit-masculino',name:'Kit Masculino',description:'3 perfumes marcantes selecionados',basePrice:1037},
  {id:'kit-arabe',name:'Kit Árabe',description:'3 sucessos da perfumaria árabe',basePrice:1003},
  {id:'kit-decantes-4',name:'Kit Descoberta',description:'4 decantes de 5 ml à sua escolha',basePrice:140}
];
