<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscripción Rechazada</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #dddddd;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60%;
        }

        .header img {
            max-width: 100%;
            height: 150px;
            margin: 0 0px;
            background-size: contain;
            background-repeat: no-repeat;
        }

        .content {
            padding: 20px;
            text-align: center;
        }

        .content h1 {
            color: #333333;
        }

        .content p {
            color: #666666;
            line-height: 1.5;
        }

        .footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #dddddd;
            color: #999999;
            font-size: 12px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <img src="https://www.pereira.gov.co/info/pereira_se/media/bloque36.png" alt="Alcaldía de Pereira">
            <img src="https://vivedigital.servicios-alcaldiapereira.com/build/assets/puntoViveDigital-yVB1sCv6.webp"
                alt="Vive Digital">
        </div>
        <div class="content">
            <h1>¡Hola, {{ $name }}!</h1>
            <p><b>La alcaldía de Pereira</b>, a traves de la <b>Secretaria de las tic</b> te informa que tu inscripción para la oferta "{{ $offer }}" ha sido <b
                    style="color: red">rechazada.</b></p>
            @if ($reason != 'NA')
                <b>El motivo de la desaprobación es el siguiente:</b>
                <p>{{ $reason }}</p>
            @endif
            <p>Gracias por tu participación. No te desanimes. Siempre puedes inscribirte en nuestros cursos. Estamos en constante actualización y publicación de nuevos cursos que te pueden interesar</p>
        </div>
        <div class="footer">
            &copy; {{ date('Y') }} Alcaldía de Pereira. Todos los derechos reservados.
        </div>
    </div>
</body>

</html>
