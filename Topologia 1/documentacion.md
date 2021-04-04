# Topologia 1

como primer paso podremos todos los dispostivos necesario para la creacion de la tolpologia 1

para ello es de suma importancia , tener el router

<div align="center">
    <p align="center">
        Figura 1. Importe de imagen Router.
    </p>
    <img src="../img/Topo3/t2_img1.png" width="300">
</div>
<br>

nos dirigimos hacia IO Routers 

<div align="center">
    <p align="center">
        Figura 2. Importe de imagen Router.
    </p>
    <img src="../img/Topo3/t2_img2.png" width="300">
</div>
<br>

hacemos click en el aparado que dice  New y seleccionamos la imágen del Router y le damos siguiente hasta llegar a la opcion de finalizar

<div align="center">
    <p align="center">
        Figura 3. Importe de imagen Router.
    </p>
    <img src="../img/Topo3/t2_img3.png" width="300">
</div>
<br>



Asi mismo para las maquinas de VMware , debemos dirigirnos hacia VmwaresVMs

<div align="center">
    <p align="center">
        Figura 4. buscando el apartado wmware.
    </p>
    <img src="../img/vmware_1.jpeg" width="300">
</div>
<br>

luego seleccionamos la maquina que deseamos , previamente habiando configurado las  sub-redes y con esto ya podremos ponerla en la topologia y estaremos listos para armarla.

<div align="center">
    <p align="center">
        Figura 5. nueva maquina.
    </p>
      <img src="../img/vmware_2.jpeg" width="300">
</div>
<br>


una vez ya se tiene armada procedemos a colocar las ips para las vps con el comando
ip "ip" "mascara" "gateway"
<div align="center">
    <p align="center">
        Figura 6. topologia armada.
    </p>
      <img src="../img/topologia1.jpeg" width="300">
</div>
<br>

para corroborar que  este bien podemos correr el comando show ip , y luego darle save para la persistencia de esa configuracion.
<div align="center">
    <p align="center">
        Figura 7. mostrando la ip.
    </p>
      <img src="../img/ipcon.jpeg" width="300">
</div>
<br>



En las maquinas virtuales se cambian en este apartado , en este caso la distro usada fue antix de sistema operativo GNU/linux.

<div align="center">
    <p align="center">
        Figura 7. mostrando la ip.
    </p>
      <img src="../img/ipVir.jpeg" width="300">
</div>
<br>


de una vez en en esta parte desde VMware se puede configurar las subredes tal como se muestra en esta imagen
<div align="center">
    <p align="center">
        Figura 8. configuracions de subredes.
    </p>
      <img src="../img/subnets.jpeg" width="300">
</div>
<br>



Una vez configurada la IP de los dispositivos finales procedemos a configurar los routers con los siguientes comandos:


### ESW8
-- Po1
>conf t

>int range f1/1 -2

>channel-group 1 mode on

>exit

-- Po3
>conf t
>int range f1/5 -6
>channel-group 3 mode on
>exit

### ESW10
-- Po3
>conf t

>int range f1/5 -6

>channel-group 3 mode on

>exit

-- Po2
>conf t

>int range f1/3 -4

>channel-group 2 mode on

>exit


### ESW9
-- Po1

>conf t

>int range f1/1 -2

>channel-group 1 mode on

>exit

-- Po2
>conf t

>int range f1/3 -4

>channel-group 2 mode on

>exit

<div align="center">
    <p align="center">
        Figura 9 configuracion de Port channels.
    </p>
      <img src="../img/Topo3/t2_img6.png" width="300">
</div>
<br>

# siguiente Paso:

Tenemos que configurar los enlaces troncales y de acceso
 - troncales entre los routers
 - de acceso hacia los dispositivos finales

### TRONCAL
    conf t
    int f#/#      o bien     int Po#
    switchport mode trunk
    switchport trunk allowed vlan 1,#,#,#,...,#,1002-1005
    end



### ACCESO
    conf t
    int f#/#
    switchport mode access
    switchport access vlan #
    end

<div align="center">
    <p align="center">
        Figura 10 Modos troncales.
    </p>
      <img src="../img/Topo3/t2_img17.png" width="300">
</div>
<br>


### ahora la configuracion de la Nube

en este paso seleccionamos un puerto que este desocupado  y ponemos la ip del host que proveera el servicio para la comunicacion.
<div align="center">
    <p align="center">
        Figura 10 configuracion de nube.
    </p>
      <img src="../img/cloud.jpeg" width="300">
</div>
<br>



# PAGINAS WEB

## pagina de contabiliadad
para la pagina de contabilidad se utilizo apache la cual levanta un html puro y lo expone en el puerto 80

<div align="center">
    <p align="center">
        Figura 11 contabiliadad.
    </p>
      <img src="../img/Topo3/conta.png" width="300">
</div>
<br>



# pagina de ventas
la pagina de ventas esta levantada por medio de node js y una motor de planitllas llamado EJS , La base de datos usada es mongodb la cual fue implementada con docker pero se encuentra en la maquina virtual de informatica expuesta en el puerto 27017 el por default de mongo.

<div align="center">
    <p align="center">
        Figura 12 Ventas.
    </p>
      <img src="../img/Topo3/ventas.png" width="300">
</div>
<br>
