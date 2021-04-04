# TOPOLOGIA 3

<div style="text-align: justify">
Si en dado caso no tenemos la imágen del Router procedemos a importarla, para ello vamos al apartado de Edit y al apartado de Preferences.

<div align="center">
    <p align="center">
        Figura 1. Importe de imagen Router.
    </p>
    <img src="../img/Topo3/t2_img1.png" width="300">
</div>
<br>

- Nos vamos al apartado de IOS Routers

<div align="center">
    <p align="center">
        Figura 2. Importe de imagen Router.
    </p>
    <img src="../img/Topo3/t2_img2.png" width="300">
</div>
<br>

- Le damos en el aparado New y seleccionamos la imágen del Router, le damos en Next, nos dirá si queremos que sea EthernetSwitch o no, podemos modificar las interfaces y al final en un área de texto de color verde si aparece vacia le daremos en buscar, luego de terminar el proceso le damos en finalizar.

<div align="center">
    <p align="center">
        Figura 3. Importe de imagen Router.
    </p>
    <img src="../img/Topo3/t2_img3.png" width="300">
</div>
<br>

- Procedemos a crear la topología 3 con las conexiones como se crea más convenientes.

<div align="center">
    <p align="center">
        Figura 4. Esquema inicial de la topología.
    </p>
    <img src="../img/Topo3/t2_img4.png" width="300">
</div>
<br>

- Se hizo uso de switches, Ethernetswitches, cloud, VPCS y Máquinas Virtuales. Procedemos a configurar cada uno de los EthernetSwitch. El primer paso indica la configuración de los port-channel bajo el siguiente esquema.

    - Po1: ESW5 - ESW6 (2 enlaces)
    - Po2: ESW6 - ESW7 (2 enlaces)
    - Po3: ESW5 - ESW7 (2 enlaces)
    - Po4: ESW6 - ESW11 (2 enlaces)

## Configurando los Port-Channel
#

- Los comandos utilizados para configurar los port-channel son

<div align="center">
    <p align="center">
        Figura 5. Comando para Port-Channel.
    </p>
    <img src="../img/Topo3/t2_img5.png" width="300">
</div>
<br>

- Comenzamos con el <b>ESW5</b> agregando todos los port-channel
<div align="center">
    <p align="center">
        Figura 6. Configurando port-channel en ESW5.
    </p>
    <img src="../img/Topo3/t2_img6.png" width="300">
</div>
<br>

- Seguimos con el <b>ESW6</b> agregando los respectivos port-channels.
<div align="center">
    <p align="center">
        Figura 7. Configurando port-channel en ESW6.
    </p>
    <img src="../img/Topo3/t2_img7.png" width="300">
</div>
<br>

- Configuramos de la misma manera el <b>ESW7</b>
<div align="center">
    <p align="center">
        Figura 8. Configurando port-channel en ESW7.
    </p>
    <img src="../img/Topo3/t2_img8.png" width="300">
</div>
<br>

- Finalizamos con el <b>ESW11</b>
<div align="center">
    <p align="center">
        Figura 9. Configurando port-channel en ESW11.
    </p>
    <img src="../img/Topo3/t2_img9.png" width="300">
</div>
<br>

- Luego de configurar el port-channel para todos los EthernetSwitches y switches procedemos a realizar los enlaces troncales y de acceso.

## Configurando enlaces troncales y de acceso
#
- En el caso del switch 3 aplicamos las configuraciones necesarias.

<div align="center">
    <p align="center">
        Figura 10. Configurando enlaces en Switch 3.
    </p>
    <img src="../img/Topo3/t2_img10.png" width="300">
</div>
<br>

- Ahora con el switch 4 hacemos lo mismo con las configuraciones indicadas.
<div align="center">
    <p align="center">
        Figura 11. Configurando enlaces en Switch 4.
    </p>
    <img src="../img/Topo3/t2_img11.png" width="300">
</div>
<br>

- Para configurar los enlaces troncales y de acceo es con el comando, si hacemos referencia a un port-channel ponemos int Po# donde # es el número de port-channel, si hacemos referencia a una intefaz normal es con int f#/#, las vlans que colocaremos acá son las mismas que vienen de la topología 2.
<div align="center">
    <p align="center">
        Figura 12. Comandos para configurar modos de enlace.
    </p>
    <img src="../img/Topo3/t2_img12.png" width="300">
</div>
<br>

- Empezamos con el <b>ESW5</b>
<div align="center">
    <p align="center">
        Figura 13. Configurando modos de enlace en ESW5.
    </p>
    <img src="../img/Topo3/t2_img13.png" width="300">
    <img src="../img/Topo3/t2_img14.png" width="300">
    <img src="../img/Topo3/t2_img15.png" width="300">
</div>
<br>


- Seguimos con el <b>ESW6</b>
<div align="center">
    <p align="center">
        Figura 14. Configurando modos de enlace en ESW6.
    </p>
    <img src="../img/Topo3/t2_img16.png" width="300">
    <img src="../img/Topo3/t2_img17.png" width="300">
    <img src="../img/Topo3/t2_img18.png" width="300">
    <img src="../img/Topo3/t2_img19.png" width="300">
</div>
<br>


- Seguimos con el <b>ESW7</b>
<div align="center">
    <p align="center">
        Figura 15. Configurando modos de enlace en ESW7.
    </p>
    <img src="../img/Topo3/t2_img20.png" width="300">
    <img src="../img/Topo3/t2_img21.png" width="300">
    <img src="../img/Topo3/t2_img22.png" width="300">
</div>
<br>

- Finalizamos con el <b>ESW11</b>
<div align="center">
    <p align="center">
        Figura 16. Configurando modos de enlace en ESW11.
    </p>
    <img src="../img/Topo3/t2_img23.png" width="300">
</div>
<br>


## Configurando VTP
#
- Procedemos a crear el VTP en modo cliente, para estos EthernetSwitches, el comando a utilizar es el siguiente.
<div align="center">
    <p align="center">
        Figura 17. Comandos para configurar VTP.
    </p>
    <img src="../img/Topo3/t2_img24.png" width="300">
</div>
<br>

- El proceso para realizar el VTP es muy similar y debe realizarse en cada uno de los <b>ESW</b>.

<div align="center">
    <p align="center">
        Figura 18. Configurando VTP de los ESW.
    </p>
    <img src="../img/Topo3/t2_img25.png" width="300">
    <img src="../img/Topo3/t2_img26.png" width="300">
    <img src="../img/Topo3/t2_img27.png" width="300">
    <img src="../img/Topo3/t2_img28.png" width="300">
</div>
<br>




</div>