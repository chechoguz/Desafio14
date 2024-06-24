const propiedadesAlquiler = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      costo: 2000,
      smoke: false,
      pets: true
    },
    {
      nombre: "Apartamento luminoso con vista al mar",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
      ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      costo: 2500,
      smoke: true,
      pets: true
    },
    {
      nombre: "Condominio moderno en zona residencial",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      costo: 2200,
      smoke: false,
      pets: false
    },
    {
      nombre: "Apartamento acogedor en suburbios",
      src: "https://www.maudierpropiedades.cl/wp-content/uploads/2019/03/IMG-20190319-WA0001-1024x680.jpg",
      descripcion: "Apartamento de 1 habitación en un suburbio tranquilo, ideal para una persona o pareja.",
      ubicacion: "789 Suburb Street, Peaceful Suburb, CA 23456",
      habitaciones: 1,
      costo: 1500,
      smoke: true,
      pets: true
    }
  ];
  
  const propiedadesVenta = [
    {
      nombre: "Apartamento de lujo en zona exclusiva",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
      ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
      habitaciones: 4,
      costo: 5000,
      smoke: false,
      pets: false
    },
    {
      nombre: "Apartamento acogedor en la montaña",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
      ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
      habitaciones: 2,
      costo: 1200,
      smoke: true,
      pets: true
    },
    {
      nombre: "Penthouse de lujo con terraza panorámica",
      src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
      ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones: 3,
      costo: 4500,
      smoke: false,
      pets: true
    },
    {
      nombre: "Casa moderna en suburbio",
      src: "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20140314/231923/m_wm_2020061550392390010.jpg",
      descripcion: "Una casa moderna y espaciosa con todas las comodidades necesarias.",
      ubicacion: "456 Modern Lane, Suburbia, CA 56789",
      habitaciones: 5,
      costo: 8000,
      smoke: false,
      pets: true
    }
  ];
  
  function renderizarPropiedades(propiedades, contenedor) {
    propiedades.forEach(propiedad => {
      const card = document.createElement('div');
      card.className = 'col-md-4 mb-4';
      card.innerHTML = `
        <div class="card">
          <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
            <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
              <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
              <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
          </div>
        </div>
      `;
      contenedor.appendChild(card);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const ventaContenedor = document.getElementById('venta-propiedades');
    const alquilerContenedor = document.getElementById('alquiler-propiedades');
  
    if (ventaContenedor && alquilerContenedor) {
      // Página de inicio: renderizar solo las primeras 3 propiedades en cada sección
      renderizarPropiedades(propiedadesVenta.slice(0, 3), ventaContenedor);
      renderizarPropiedades(propiedadesAlquiler.slice(0, 3), alquilerContenedor);
    } 
  });