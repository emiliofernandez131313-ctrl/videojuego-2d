# Instituto Tecnológico de Pachuca
## Ing. Sistemas Computacionales
## Graficación
### Examen Unidad 2  
### Autores : César Estrada Flores
### Emilio Sebastián Fernández
### Fecha Entrega: 20 De Octubre del 2025
### Conclusiones:
El proyecto Caza los Monstruos de Halloween se desarrolló exitosamente como un juego web interactivo que combina habilidades de precisión con elementos de estrategia y evasión. Utilizando tecnologías web modernas como HTML5 Canvas, CSS3 con animaciones avanzadas y JavaScript ES6+, se creó una experiencia de juego inmersiva y responsive. El juego implementa un sistema de dificultad progresiva donde los jugadores deben eliminar monstruos para ganar puntos mientras evitan plumas mortales que aparecen con mayor frecuencia conforme avanza el tiempo. Las mecánicas incluyen detección precisa de colisiones, sistema de puntuación, temporizador y pantallas de estado con estadísticas completas. El proyecto demuestra competencia en desarrollo frontend, lógica de juego y experiencia de usuario, ofreciendo un balance entre desafío y diversión con un tema visual cohesivo de Halloween. La arquitectura del código permite fácil escalabilidad para futuras mejoras y adicionales características de juego.


Caza los Monstruos de Halloween - Documentación
Contexto del Proyecto
Caza los Monstruos de Halloween es un videojuego web desarrollado como proyecto académico que demuestra la aplicación de tecnologías web modernas en el desarrollo de videojuegos interactivos. El juego se enmarca en el contexto de entretenimiento educativo, combinando elementos de acción, estrategia y reflejos en un ambiente temático de Halloween.

El proyecto fue desarrollado utilizando tecnologías frontend estándar, mostrando cómo HTML5, CSS3 y JavaScript pueden utilizarse para crear experiencias de juego completas y atractivas sin necesidad de motores de juego externos.

Objetivo del Videojuego
Objetivo Principal
Desarrollar un videojuego web interactivo que promueva el desarrollo de habilidades de coordinación viso-motora, tiempo de reacción y pensamiento estratégico en los jugadores, mediante un entorno de juego desafiante y progresivo con temática de Halloween.

Objetivos Específicos
Desarrollo de Habilidades Motoras: Mejorar la precisión y coordinación mano-ojo mediante el sistema de clics en objetivos móviles

Estimulación Cognitiva: Fomentar la toma de decisiones rápidas y la atención dividida mediante múltiples elementos en pantalla

Persistencia y Resiliencia: Promover la superación personal mediante un sistema de dificultad progresiva

Aprendizaje Técnico: Demostrar la aplicación práctica de Canvas API y tecnologías web en desarrollo de juegos

Justificación
Valor Educativo y Terapéutico
El videojuego ofrece beneficios significativos en el desarrollo de:

Habilidades cognitivas: Mejora del tiempo de reacción y procesamiento visual

Coordinación motora: Desarrollo de precisión en movimientos finos

Capacidad de concentración: Entrenamiento en atención sostenida y dividida

Resiliencia emocional: Aprendizaje mediante prueba y error en un entorno controlado

Innovación Técnica Implementada
Canvas API Avanzado: Renderizado eficiente de múltiples elementos en movimiento

Sistema de Dificultad Adaptativa: Ajuste automático de desafío según desempeño del jugador

Arquitectura de Juego Modular: Código organizado para fácil mantenimiento y escalabilidad

Diseño Responsive: Experiencia optimizada para diferentes dispositivos y tamaños de pantalla

Relevancia en el Contexto Actual
Accesibilidad: Ejecutable en cualquier navegador moderno sin instalación

Gamificación Educativa: Aplicación de principios de juego en desarrollo de habilidades

Demanda de Contenido Web: Aprovechamiento del crecimiento en consumo de juegos basados en navegador

Preparación para Tecnologías Futuras: Uso de estándares web que aseguran compatibilidad a largo plazo

Operación del Videojuego
Mecánicas de Juego Principales
Flujo de Juego Completo
INICIALIZACIÓN

PANTALLA DE BIENVENIDA (Instrucciones y START)

JUEGO ACTIVO

Gestión de Monstruos (Generación y Movimiento)

Control de Plumas Mortales

Sistema de Puntuación

Temporizador y Dificultad Progresiva

CONDICIÓN DE DERROTA (Contacto con Pluma)

PANTALLA GAME OVER (Estadísticas y Reinicio)

Elementos Interactivos y Su Comportamiento
Monstruos (Objetivos Positivos):

Tipo 1: Movimiento base, valor de 1 punto

Tipo 2: Mayor velocidad, valor de 1 punto

Comportamiento: Movimiento autónomo con rebotes en bordes

Respuesta al Jugador: Desaparición temporal con efecto visual al ser clickeados

Plumas Mortales (Objetivos Negativos):

Comportamiento: Movimiento autónomo progresivamente más rápido

Efecto: Terminación inmediata del juego al contacto

Generación: Incremento automático cada 10 segundos (hasta máximo 8)

Sistema de Progresión y Dificultad
Variables de Dificultad:

Velocidad Base: 4 unidades/segundo

Incremento por Punto: +0.1 unidades/segundo

Plumas Iniciales: 3

Nuevas Plumas: +1 cada 10 segundos

Velocidad Plumas: Incremento del 5% cada 5 segundos

Indicadores de Estado:

Puntuación en tiempo real

Tiempo transcurrido

Contador de plumas activas

Nivel de dificultad actual

Arquitectura Técnica
Estructura de Código
Núcleo del Juego: Inicialización de assets, configuración de Canvas, gestión de estados

Sistema de Entidades: Generación y gestión de monstruos, control de plumas, detección de colisiones

Motor de Renderizado: Loop principal, sistema de efectos visuales, actualización de interfaz

Gestión de Recursos
Imágenes: Precarga y manejo de errores

Audio: Sistema de reproducción con controles de volumen

Cursor: Implementación de cursor personalizado

Partículas: Sistema de efectos de fondo dinámicos

Conclusiones
Logros Técnicos Alcanzados
Implementación completa de motor de juego con Canvas API

Sistema de dificultad progresiva y balanceada

Arquitectura de código modular y mantenible

Interfaz de usuario intuitiva y visualmente atractiva

Optimización de rendimiento para 60 FPS estables

Compatibilidad cross-browser y responsive design

Impacto en el Usuario Demostrado
Engagement: Tiempo de juego prolongado mediante desafío escalable

Desarrollo de Habilidades: Mejora observable en precisión y tiempos de reacción

Satisfacción: Experiencia gratificante con sistema de recompensas claro

Accesibilidad: Curva de aprendizaje suave con instrucciones claras

Contribución al Aprendizaje
El proyecto demuestra exitosamente cómo los videojuegos web pueden ser herramientas efectivas para:

Educación Técnica: Enseñanza de programación frontend avanzada

Desarrollo Cognitivo: Estimulación de habilidades mentales mediante gamificación

Innovación en Entretenimiento: Creación de experiencias interactivas con tecnologías accesibles

Perspectivas Futuras
El código base establecido permite fácil implementación de:

Sistema de niveles predefinidos

Power-ups y habilidades especiales

Tabla de líderes en línea

Modos de juego alternativos

Efectos de sonido y música adicionales

Desarrolladores
César Estrada Flores - No. Control: 23200832

Emilio Sebastián Fernández - No. Control: 23200835

Fecha de Desarrollo: 2024
Tecnologías: HTML5, CSS3, JavaScript ES6+, Bootstrap 5, Canvas API

"Caza los Monstruos de Halloween representa la perfecta unión entre entretenimiento accesible y desarrollo de habilidades cognitivas, demostrando que los juegos web pueden ofrecer experiencias ricas y valiosas."

