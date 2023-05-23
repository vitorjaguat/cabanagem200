import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { TagCloud } from 'react-tagcloud';
import { Carousel } from 'react-configurable-carousel';
import {
  Carousel as Carousel2,
  ScrollingCarousel,
} from '@trendyol-js/react-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useMediaQuery } from '@/utils/useMediaQuery';
import { useEffect, useState } from 'react';

const prompts = [
  'Focal length 16mm. f/11. 1/60s. ISO 100. Film Still POV of an Igapó in the amazonian forest. It is possible to see the river and the sky. Aerial roots can be seen in the margins. Giant exemplars of one samaúma tree, bromélias tocha de fogo, vitórias-régias and aningas de várzea are also present and it is possible to see their flowers. An ocelot-pirarucu makes an appearance. A bunch of cabana coins are blended with brown shaky waters. A fragata is burning in the sky, with fire and flames. Nheenga cabana flag in the center. ',

  'Focal length 50mm. 1/20s. f/16. ISO 100. Color action scene of a crowd of paraense cabanos, men and women, fighting in the Cabanagem Revolution in Belém do Pará in 1835. The background contains a Frigate. They are wearing very simple brown and red clothes. Some of them wear straw hats. They have photographic facial expressions. Some of them have shotguns. The scene has a lot of movement. ',

  'Focal length 50mm. f/8. 1/60s. ISO 100. Black and white film still action scene of the newspaper O Paraense is being printed in an old typographic press in Belém do Pará in 1822. The room has the typographic press and people working around the machine. ',

  'Focal length 16mm. f/4. 1/30s. ISO 100. Color photographic film still of a large group of paraense cabanos assaulting the large Frigate Clio in 1835, anchored in Salinas during Cabanagem revolution. English guards have surrendered to a crowd of cabanos. ',

  'Film still action scene of an indigenous  mixed-race cabano man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. The man wears brown, white and red clothes. He has detailed photographic facial expressions. The background is a training camp in an amazonian forest. 35mm. ISO 100. Daylight.',

  'Film still action scene of an indigenous  mixed-race cabano man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. The man wears dirty brown, white and red clothes. He is shirtless. He has detailed photographic facial expressions. Sometimes he wears a paraense hat. The background is a training camp in an amazonian forest. 35mm. ISO 100. Daylight.',

  'Film still action scene of an indigenous mixed-race 28 years old paraense cabano man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. The man wears dirty brown, white and red clothes. He is shirtless. He has detailed photographic facial expressions. The background is a training camp in an amazonian forest. 35mm. ISO 100. Daylight.',

  'Film still action scene of an indigenous black 28 years old paraense cabano man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. The man wears dirty brown, white or red pants. He has detailed photographic facial expressions. He is not wearing a hat. He has a gun. The background is a training camp in an amazonian forest. 35mm. ISO 100. Daylight. ',

  'Film still action scene of a tapuio paraense cabano man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. The man wears dirty brown, white or red pants. He has detailed photographic facial expressions. He is not wearing a hat. He has a shotgun. The background is a training camp in an amazonian forest. 35mm. ISO 100. Daylight. ',

  'Film still action scene of a indigenous paraense cabano man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. The man wears dirty brown, white or red pants. He has detailed photographic facial expressions. He is shirtless. He has a rifle. The background is a training camp in an amazonian forest. 35mm. ISO 100. Daylight. Full color palette. ',

  'Film still action scene of an indigenous paraense cabana woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. The woman wears dirty brown, white and red very simple clothes. She has detailed photographic facial expressions. She is not wearing anything in her head. She has a gun. The background is a training camp in an amazonian forest. 35mm. ISO 100. Daylight. ',

  'Close up film still of a cabocla paraense older woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1835. She wears only brown and white very simple clothes, without any collars nor headband. She has loose hair.  The background is the dense green amazonian forest.  She has detailed photographic facial expressions. 50mm. f/1.2. ISO 100. Bokeh. Daylight',

  'Film still of a mixed-race brown paraense man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. The background is the dense green amazonian forest. He wears only brown and white very simple clothes, without any props.  He has detailed photographic facial expressions. ',

  'Film still of a paraense cabano young black man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. The background is the dense green amazonian forest. He wears only brown and white very simple clothes and a straw hat, without any props.  He has detailed photographic facial expressions. ',

  'Film still of a paraense cabano caboclo man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. The background is the dense green amazonian forest. He wears only brown and red very simple clothes, without any props nor a hat.  He is shirtless. He has detailed photographic facial expressions. ',

  'Film still of a paraense brown man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1835. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. The background is the dense green amazonian forest.  He is wearing simple brown and red clothes and a straw hat. He has detailed photographic facial expressions. ',

  'Film still of a paraense brown man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1835. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. The background is the dense green amazonian forest.  He is wearing simple brown and red clothes and a straw hat. He has detailed photographic facial expressions. ',

  'Film still of a paraense brown woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1835. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. The background is the dense green amazonian forest.  She is wearing simple brown and red clothes, without any props and without collars. She has detailed photographic facial expressions. ',

  'Action scene of a paraense brown woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1835. Focal length 35mm. f/3.5. ISO 100. Bokeh. Daylight. The background is the city of Belém do Pará in 1835..  She is wearing simple brown and red clothes, without any props and without collars. She has detailed photographic facial expressions. ',

  'Film still Action scene of a paraense brown woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1835. Focal length 50mm. f/5.6. ISO 100. Bokeh. Daylight. The background is the city of Belém do Pará in 1835.  She is wearing simple brown, red and white clothes, without any props.  Her hair is loose in the wind. She has detailed photographic facial expressions. ',

  'Film still Action scene of cabocla woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1835. Focal length 50mm. f/5.6. ISO 100. Bokeh. Daylight. She has loose hair not using any headband. The background is the city of Belém do Pará in 1835.  She is wearing very simple brown and white clothes, without any props. She has detailed photographic facial expressions. ',

  'Film still Action scene of black woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1835. Focal length 50mm. f/2.8. ISO 100. Bokeh. Daylight. She has loose hair not using any headband nor jewels. The background is the city of Belém do Pará in 1835.  She is wearing very simple brown and white clothes, without any jewels. She has detailed photographic facial expressions. ',

  'Film still Action scene of a poor paraense black indigenous woman preparing to fight during Cabanagem in Belém do Pará in 1835. Focal length 35mm. f/1.4. ISO 100. Bokeh. Daylight. She has loose hair. The background is the city of Belém do Pará in 1835.  She is wearing very simple brown and white clothes, without any jewels. She has detailed photographic facial expressions. ',

  'Film still Action scene of a poor paraense black indigenous man preparing to fight during Cabanagem in Belém do Pará in 1835. The background is the city of Belém do Pará in 1835. Focal length 35mm. f/1.4. ISO 100. Bokeh. Daylight. He is wearing very simple brown and white clothes, without any props. He has detailed photographic facial expressions. ',

  'Close up film still of a poor paraense indigenous black cabano man preparing to fight imperial forces during Cabanagem in Belém do Pará in 1835.  He is wearing very simple brown and white clothes. The background is the city of Belém do Pará as in 1835. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. He has detailed photographic facial expressions. ',

  'Close up film still of a poor paraense indigenous black woman preparing to fight imperial forces during Cabanagem in Belém do Pará in 1835.  She is wearing very simple brown and white clothes. The background is the city of Belém do Pará as in 1835. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. She has detailed photographic facial expressions. ',

  'Close up film still of a poor paraense indigenous woman preparing to fight imperial forces during Cabanagem in Belém do Pará in 1835.  She has loose hair, without a band. She is wearing very simple brown and red clothes, without any props. The background is the city of Belém do Pará as in 1835. Bokeh. Focal length 50mm. f/1.2. ISO 100. Daylight. She has detailed photographic facial expressions. ',

  'Close up film still of a poor paraense black woman preparing to fight imperial forces during Cabanagem in Belém do Pará in 1835.  She has loose hair, without a band. She is wearing very simple brown and red clothes, without any props. The background is the city of Belém do Pará as in 1835. Bokeh. Focal length 50mm. f/1.2. ISO 100. Daylight. She has detailed photographic facial expressions. ',

  'Action Scene of a cabano man fighting the revolution of Cabanagem in Belém do Pará in 1835. He wears very simple brown, white and red clothes, without any props. The background is a popular uprising in Belém do Pará, also in 1835. The scene has much movement. The man has detailed photographic expressions. Focal length 100mm. f/2. ISO 100. Daylight. ',

  'Film still Action Scene of a paraense black cabano man uprising in Cabanagem in Belém do Pará in 1835. Bokeh. Focal length 20mm. f/2. ISO 100.  The background has a blurred brig. He wears simple brown, white and red clothes, without any props.  He wears a straw hat.The background is a popular uprising in Belém do Pará with hundreds of people in 1835.The man has detailed photographic expressions. Daylight.',

  'Film still Action Scene of a poor paraense black cabano woman uprising in Cabanagem in Belém do Pará in 1835. Bokeh. Focal length 20mm. f/2. ISO 100.  The background has a blurred brig. She wears very simple brown, red and white clothes, without any props. Her hair is loose. The background is a popular uprising in Belém do Pará with hundreds of people in 1835. She has detailed photographic expressions. Daylight.',

  'Action Scene of a poor paraense black cabano woman uprising in Cabanagem in Belém do Pará in 1835. Bokeh. Focal length 20mm. f/2. ISO 100.  She has anger in her face. She wears very simple brown, red and white clothes, without any props. Her hair is loose. The background is Belém do Pará with hundreds in 1835. She has detailed photographic expressions. Daylight. ',

  'Film still Action Scene of a paraense black cabano woman uprising in Cabanagem in Belém do Pará in 1835. Bokeh. Focal length 20mm. f/2. ISO 100.  The background has a blurred brig. She wears simple brown, white and red clothes, without any props. The background is a popular uprising in Belém do Pará with hundreds of people in 1835. She has detailed photographic expressions. Daylight.',

  "Wider angle Action Scene of a poor paraense cabana cabana woman Cabanagem uprising in Belém do Pará in 1835. Bokeh. Focal length 20mm. f/2. ISO 100.  Her hair is free, she doesn't use a band. She wears simple brown, white and red clothes, without any props. The background is a popular uprising in Belém do Pará with hundreds of people in 1835. She has detailed photographic expressions. Daylight.",

  'Film still Action Scene of an out of focus shot of Belém do Pará during the Cabanagem Revolution in 1835. Bokeh. Focal length 20mm. f/2. ISO 100. In the background it is possible to see a brig. Daylight.',

  "Wider angle Action Scene of a poor paraense cabocla cabana woman in the Cabanagem uprising in Belém do Pará in 1835. Bokeh. Focal length 20mm. f/2. ISO 100.  Her hair is free, she doesn't use a band. She wears simple brown and white clothes, without any props. The background is a popular uprising in Belém do Pará with hundreds of people in 1835. She has detailed photographic expressions. Daylight.",

  'Color Film still action scene of an indigenous Mawé man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. He is wearing very simple clothes and a red vest shirt.  He wears a straw hat. He has detailed photographic facial expressions. The background is a training camp in an amazonian forest. 35mm. ISO 100. Daylight.',

  'Color film still action scene of an indigenous Munduruku woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. She wears very simple brown and red clothes. Her hair is loose. She has detailed photographic facial expressions. The background is a training camp in an amazonian forest. Focal length 35mm. ISO 100. Daylight.',

  'Film still of a indigenous munduruku man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. The background is the dense green amazonian forest. He wears only brown and white very simple clothes and a straw hat, without any props.  He has detailed photographic facial expressions.',

  "Close up Film still of a indigenous Mawé man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. The background is the dense green amazonian forest. He wears only brown and red very simple shirt. It's possible to see his head and hair without any hat. He is not wearing makeup.  He has detailed photographic facial expressions.",

  "Close up Film still of a indigenous Mawé woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855.  She wears a very simple brown and red shirt. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. The background is the dense green amazonian forest.  It's possible to see her head and hair without any hat. She has detailed photographic facial expressions.",

  "Close up Film still of a 30 years old indigenous Mawé woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855.  She wears very simple brown and red clothes. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. The background is the dense green amazonian forest.  It's possible to see her loose hair without any hat. She has detailed photographic facial expressions, without any makeup.",

  "Close up Film still of a 25 years old indigenous Mawé cabana woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855.  She wears very simple brown and red clothes. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. The background is the dense green amazonian forest.  It's possible to see her loose hair without any hat. She has detailed photographic facial expressions, without any makeup.",

  'Action Scene of an indigenous Mawé cabana man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855.  He wears very simple brown and red clothes. Focal length 35mm. f/1.2. ISO 100. Bokeh. Daylight. The background is the City of Belém do Pará in 1855. He has detailed photographic facial expressions.',

  'Color film still Action Scene of an urbanized indigenous Munduruku cabano woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. The background is the City of Belém do Pará. She is dressed in simple brown and red very cabano clothes. Focal length 20mm. f/8. ISO 100. Bokeh. Daylight.  She has detailed photographic facial expressions.',

  'Color film still Action Scene of an urbanized indigenous Munduruku cabano woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. The background is the City of Belém do Pará. She is dressed in simple brown and red very cabano clothes. She is not wearing any collars. Focal length 20mm. f/8. ISO 100. Bokeh. Daylight.  She has detailed photographic facial expressions.',

  "Color film still Action Scene of an poor urbanized indigenous Mawé cabano woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. The background of the scene is the cityscape of Belém do Pará. She is dressed in simple brown and red very cabano clothes. Her hair is loose and she's not wearing any hat in her head. Focal length 20mm. f/8. ISO 100. Bokeh. Daylight.  She has detailed photographic facial expressions. She's not wearing any collars. ",

  'Close up still Action Scene of an urbanized indigenous Munduruku cabano man preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. The background is the cityscape of Belém do Pará. He wears a straw hat. He is dressed in simple brown and red very cabano clothes. He is not wearing any collars. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. He has detailed photographic facial expressions.',

  "Color Close up film still of a poor urbanized indigenous Munduruku cabana woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. The background is the cityscape of Belém do Pará. It's possible to see her hair, without ant hat. She is dressed in simple brown and red cabano clothes. She is not wearing any collars. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. She has detailed photographic facial expressions.",

  'Color Close up film still of a poor urbanized 20 years old indigenous brazilian Munduruku cabana woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. The background is the cityscape of Belém do Pará. Her hair is loose, without any props. She is dressed in simple brown and red cabano clothes. She is not wearing any collars. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. She has detailed photographic facial expressions.',

  "Wider angle Action Scene of a poor urbanized indigenous Mawé cabana woman uprising in Belém do Pará in 1835 in the Cabanagem Revolution. Bokeh. Focal length 20mm. f/2. ISO 100.  Her hair is free, she doesn't use a band. She wears simple brown, white and red clothes, without any props. The background is a popular uprising in Belém do Pará with hundreds of people in 1835. She has detailed photographic expressions. Daylight.",

  "Film Still POV of a wood canoe navigating in an Igapó in the amazonian forest. It's possible to see the river. Focal length 20mm. f/16. ISO 100. ",

  'Film Still POV of a wood canoe navigating in an Igapó in the amazonian forest, with a nearby palafita house. Focal length 16mm. f/16. ISO 100. 5500k.',

  'A landscape film still photography of a Portuguese fragatas, brigs and corvetas at Tapajós river in Belém do Pará during Cabanagem Revolution. In the background we see the dense amazonian forest of ilha das cobras. In the foreground there’s an Igapó with a large mutiny of cabanos observing the landscape. Focal length 150mm. f/16. Daylight colors. ISO 100. ',

  'A color landscape film still photography of many corvetas, fragatas and brigs at Tapajós river in Belém do Pará during Cabanagem Revolution in 1835. In the background we see the dense amazonian forest of ilha das cobras. Focal length 150mm. f/16. ISO 100. ',

  'A color landscape film still photography of of corvetas, fragatas and brigs at Tapajós river in Belém do Pará during Cabanagem Revolution.',

  'A landscape film still photography of a Portuguese fragatas, brigs and corvetas at Tapajós river in Belém do Pará during Cabanagem Revolution. In the background we see the dense amazonian forest of ilha das cobras. In the foreground there’s an Igapó with a large mutiny of cabanos observing the landscape. Focal length 150mm. f/16. Daylight colors. ISO 100. ',

  'A landscape film still photography of a mutiny of cabanos observing the landscape of Tapajós river during Cabanagem Revolution. Focal length 150mm. f/16. Daylight colors. ISO 100. ',

  'Color Film still of a large group of standing insurgent woman and man paraense cabanos near a Igapó river shore with aninga trees looking backwards during Cabangem Revolution in 1836. It is possible to see a portuguese Fragata in the river. The background is the Rio Tapajós with dense amazonian forest. The scene has a lot of movement. They wear brown and red clothes. They are diverse.  Some of them are raising their guns.  Focal length 100mm. 1/20s. f/16.',

  "Color Landscape Film still of a Fragata in Tapajós River in front of a large group of standing insurgent woman and man paraense cabanos with guns near an Igapó river shore with aninga trees looking backwards during Cabangem Revolution in 1836. The background is the Rio Tapajós with dense amazonian forest and there's a fragata in the River. The scene has a lot of movement. They wear brown and red clothes. They are diverse.  Some of them are raising their guns.  Focal length 100mm. 1/20s. f/16.",

  'Landscape still of Navy Fragatas, Brigs and Corvetas in Rio Marajó during Cabanagem Revolution in 1835 in the Amazon Forest. Photographic sharp and accurate details. Focal length 100mm. f/16. ISO 100. ',

  'Landscape still of Navy Fragatas, Brigs and Corvetas in Rio Marajó during Cabanagem Revolution in 1835 in the Amazon Forest. Photographic sharp and accurate details. Focal length 100mm. f/16. ISO 100. ',

  'Color Film still of dozens of paraense cabanos insurgent woman and man during Cabanagem Revolution in Belém do Pará in 1855 fighting against imperial forces. They are wearing brown and red clothes. Some of them wear straw hats. They have guns. The background is the Rio Tapajós with dense amazonian forest and aninga trees. The scene has a lot of movement.  The have photographic facial expressions. Some of them are raising their guns. Focal length 16mm. 1/20s. f/16. ISO 100.',

  'Focal length 16mm. 1/20s. f/16. ISO 100. Aerial film still of dozens of paraense cabanos insurgent woman and man during Cabanagem Revolution in Belém do Pará in 1855 fighting against imperial guards.  The background is the Rio Tapajós with dense amazonian forest and aninga trees. They are wearing brown and red clothes. Some of them wear straw hats. They have guns. The scene has a lot of movement.  They have photographic facial expressions. Some of them are raising their guns.  ',

  'Focal length 50mm. 1/20s. f/16. ISO 100. Color film still of a crowd of paraense cabanos during Cabanagem Revolution in Belém do Pará in 1855 fighting against imperial guards.  The background is a navy ship in Tapajós River with dense amazonian forest and aninga trees. They are wearing brown and red clothes. Some of them wear straw hats. They have guns. The scene has a lot of movement.  They have photographic facial expressions. Some of them are raising their guns.',

  'Focal length 35mm. f4. 1.30s. ISO 100. A brig anchored in a port in Ilha de Salina, in State of Pará. British imperial officers are waiting in a storm with increased waves during Cabanagem repression campaign in 1836. ',

  'Focal length 16mm. f4. 1.30s. ISO 100. Color Photographic Film Still of a large group of paraense cabanos assaulting the large Frigate Clio in 1836, anchored in Belém do Pará during Cabanagem revolution in 1836. English guards have surrendered to a crowd of cabanos, who are seen in the scene carrying boxes of guns. There is smoke and some fire in the Frigate.  The background is River Pará and the amazon forest in 1836.',

  'Focal length 16mm. f/16. ISO 100. Aerial action scene films still of a crowd of Paraense Cabanos fighting against imperial oppression in Belém do Pará during the Cabanagem Revolution in 1835. The background in the city of Belém do Pará, close to Forte do Presépio in 1835. The cabanos wear brown, white and red clothes. The scene has a lot of movement.',

  'Focal length 16mm. f/16. ISO 100. Aerial Film still of Brigs and Fragatas in the Tapajós River during Cabanagem Revolution in 1835. The Background in the amazonian forest in Ilha das Cobras. Photographic details.  ',

  "Film Still A burning Brig in Tapajós river in Belém do Pará during Cabanagem revolution in 1855. There's fire and smoke in the scene. Focal length 16mm. f/16. 1/2s. ISO 100. ",

  "Film still action scene of paraense cabanos revolutionaries fighting against imperial forces in Cabanagem in 1835. Some of them use straw hats. We see Igreja Nossa Senhora do Carmo in Belém do Pará, and we see the Igreja being taken over. The people in the scene have photographic facial expressions. People wear brown, white and red dirty clothes. Some of them use straw hats. They use shotguns. Focal length 16mm. ISO 100. It's early morning and there are clouds in the sky. The scene is photo-realistic.",

  'Film still of Cabanagem revolution taking place in Belém do Pará in 1835. We see Igreja Nossa Senhora do Carmo in the scene. Hundreds of young cabano people are fighting, taking over the streets. Some of them have guns, they wear red and brown clothes. They also wear straw hats. We can see detailed photographic facial expressions. One man is seen distributing newspapers in the scene. Focal length 14mm. ISO 100. Early morning colors. ',

  'Drone Angle Film still action Scene  of thousands of paraense, indigenous, and black cabanos man and woman people fighting in Belém do Pará in 1835 during the Cabanagem revolution. Fire in the scene. Many people are raising their hands.  They have photographic detailed facial expressions. Men and women wear red, brown and white dirty clothes.  Focal length 14mm. ISO 100.',

  "Ground Action scene of Cabanagem revolution taking place in Belém do Pará. We see Igreja Nossa Senhora do Carmo in a square where we see hundreds of paraense cabanos fighting with gunshots and rifles. There's a fire in the scene. In the foreground a man is seen screaming pointing his gun to an imperial guard. The men wear straw hats. We can see detailed photographic facial expressions in their faces. Focal length 16mm. ISO 100. Warm colors. ",

  "Ground Action scene of Cabanagem revolution taking place in Belém do Pará. We see Igreja Nossa Senhora do Carmo in a square where we see about 300 paraense cabanos fighting with gunshots and rifles. There's a fire with a column of smoke in the scene. The men wear straw hats. We can see detailed photographic facial expressions in their faces. Focal length 150mm. ISO 100. Warm colors. ",

  'Ground Action wide-angle film still scene of Cabanagem revolution taking place in Belém do Pará. We see the façade of Igreja Nossa Senhora do Carmo. 200 paraense cabanos are fighting with gunshots and rifles. The men wear straw hats. The men have photographic facial expressions on their faces. Focal length 16mm. ISO 100. Warm colors. ',

  'Wide angle Film Still of Forte do Presépio in Belém do Pará being taken over by cabanos during Cabanagem Revolution. About 100 men are seen on the scene. They are wearing simple brown, white, and red clothes. Focal length 16mm. ISO 100. 3pm.',

  'Wide Color Action Scene film still  of 200 paraense cabanos are fighting with gunshots and rifles in Cabanagem revolution. We see the whole facade of Igreja Nossa Senhora do Carmo. Men wearing straw hats and red and brown clothes in front of Igreja Nossa Senhora do Carmo. Focal length 16mm. ISO 100. Warm colors. ',

  'Color Action Scene film still  of 200 paraense cabanos are fighting with gunshots and rifles in Cabanagem revolution taking place in Belém do Pará in front of Igreja Nossa Senhora do Carmo. In the scene it is also possible to see the sky. The scene has a lot of movement. The men wear straw hats and they also wear brown and red clothes. Focal length 16mm. ISO 100. Warm colors. ',

  'Color Action Scene film still  of 200 paraense cabanos are fighting with gunshots and rifles against imperial guards in Cabanagem revolution taking place in Belém do Pará in front of Igreja Nossa Senhora do Carmo. The men wear straw hats and they also wear red clothes. In the scene it is also possible to see the sky. The scene has a lot of movement.  Focal length 16mm. ISO 100. Warm colors. ',

  'Action scene Film still of Cabanagem Revolution in 1855, with a large group of hundreds of cabano men wearing dirty simple brown, black and red clothes and guns making a revolution. The men wear straw hats. Focal length 16mm. f/16. 1/125 s. ISO 100. 3pm. Detailed photographic composition. ',

  'Upper angle Action Scene Film still of thousands of paraense, indigenous, and black cabanos people fighting in Belém do Pará in 1835 during the Cabanagem revolution. The man and woman in the scene wear brown, white and red clothes, and have photographic facial expressions. Focal length 16mm. 1/125 s. f/16. ',

  'Drone Angle Film still action Scene  of thousands of paraense, indigenous, and black cabanos man and woman people fighting in Belém do Pará in 1835 during Cabanagem Revolution in Belém do Pará in 1835. There’s fire in some areas of the scene. Focal length 16mm. ISO 100. ',

  'Drone Angle Film still action Scene of thousands of paraense, indigenous, and black cabanos man and woman people in the Cabanagem revolution in Belém do Pará in 1855.fighting in Belém do Pará. There’s fire in some areas of the scene. Focal length 16mm. ISO 100. ',

  'Upper Angle Drone action Scene of thousands of paraense, indigenous, and black cabanos man and woman people in the Cabanagem revolution in Belém do Pará in 1835. There’s fire in some areas of the scene. Focal length 16mm. ISO 100. ',

  'Color Action Scene film still of the newspaper “O Paraense” being printed in an old typographic press in Belém do Pará in 1822. The scenario is in a house in Belém do Pará and in a window it is possible to see Cabanagem insurrection happening outside. In the scene we see Felipe Patroni, a 20 years old caboclo man coordinating other 6 caboclos. Focal length 16mm. ISO 100. ',

  'Color film still action scene of the newspaper "O Paraense" is being printed in an old typographic press during Cabanagem revolution in Belém do Pará. The room has the typographic press and 5 men working around the machine. Focal length 16mm. RGB. ISO 100.',

  'Focal length 50mm. f/1.2. 1/10s. ISO 100. Color Epoch Photo Film still of young Felipe Patroni and the Vasconcelos brothers distributing many pamphlets and newspapers to a group of paraense man and woman people during Cabanagem in 1835. People are reading the newspaper. The background is the city of Belém do Pará in 1823. They are mulatos and wear simple clothes and boots. The background is the city of Belém do Pará in 1835.',

  'Focal length 35mm. 1/20s. f/8. ISO 100. A photo-realist solar punk amazonian DMT mandala containing with a pattern of aninga, samaumeira, vitória-régia, dense amazonian forest Igapó and insurgent regenerative evolution composition. Corners contain Mundurku, Mawé, and Baniwa entities apparitions in 5 scenes. Nheenga Cabana. ',

  'Focal length 35mm. 1/20s. f/8. ISO 100. A photo-realist solar punk amazonian DMT mandala containing with a pattern of aninga, samaumeira, vitória-régia and insurgent regenerative evolution. Corners contain Mundurku entities apparitions. ',

  'Focal length 16mm. 1/20s. f/8. ISO 100. Film still of a  ground level tree mandala. Black, green and red Samaúma amazonian  containing seven circle pattern of aninga, samaumeira, vitória-régia and regenerative evolution.',

  'Focal length 35mm. 1/20s. f/8. ISO 100. amazonian ayahuasca mandala containing red, yellow and green hues with main pattern of samaumeira, but also dense amazonian forest Igapó and insurgent regenerative evolution composition. Corners contain Munduruku, Mawé, and Baniwa entities apparitions in 5 scenes. Nheenga Cabana.',

  'Focal length 35mm. 1/20s. f/8. ISO 100. Film still amazonian mandala DMT containing red and yellow  hues with main pattern of Kapok Tree (Ceiba pentandra), but also dense amazonian forest Igapó and insurgent regenerative evolution composition. The scene is decentralized. Nheenga Cabana.',

  "Film Still POV of an Igapó in the amazonian forest. It's possible to see the river and the sky. Focal length 20mm. f16. 1/20s. ISO 100.",

  `Focal length 20mm. f16. 1/20s. ISO 100. Cabana 20 copper coins from Cabanagem Revolution of 1835. The borders are forged in tapajonic style. And in the center of the coins there's the number "7". `,

  "Focal length 16mm. f16. 1/20s. ISO 100. Film still of aninga-açú trees in an Igapó, where it's possible to see the sky, ",

  'Focal length 20mm. f16. 1/20s. ISO 100. Film still of a giant Samaúma treetop in the the amazon forest. In the background there are vitória-regias with their flowers.',

  'Focal length 20mm. f16. 1/20s. ISO 100. Upper angle Film still of gigantic vitória-regias with their flowers in the amazonian forest.',

  'Focal length 20mm. f16. 1/20s. ISO 100. Film still of a giant Samaúma roots in the the amazon forest.',

  'A black and white vector drawing of one long horizontal line in which in the center there is a subtle marajoara ornament with white background.',

  'Focal length 16mm. f/11. 1/60s. ISO 100. Film Still POV of an Igapó in the amazonian forest. It is possible to see the river and the sky. Aerial roots can be seen in the margins. Giant exemplars of one samaúma tree, bromélias tocha de fogo, vitórias-régias and aningas de várzea are also present and it is possible to see their flowers. An ocelot-pirarucu makes an appearance. A bunch of cabana coins.',

  'Focal length 50mm. f32. 1/125s. ISO 100. A bunch of Cabana copper coins from Cabanagem Revolution of 1835. The background is the Marajó River with brown water.',
  'Focal length 20mm. f16. 1/20s. ISO 100. Film still of a giant Samaúma treetop and roots in the the amazon forest.',

  'Focal length 50mm. f16. 1/20s. ISO 100. POV Film Still of an Aninga-açu Montrichardia.',

  'Focal length 50mm. f16. 1/20s. ISO 100. Film Still of an Aninga-açu giant leafs.',

  'Focal length 50mm. f16. 1/20s. ISO 100. Upper anfle Film still of vitória-regias with their flowers in the amazonian forest.',

  'Focal length 50mm. f16. 1/20s. ISO 100. Film still AECHMEA AQUILEGA AMARELA.',

  'Focal length 50mm. f16. 1/20s. ISO 100. Cabana 20 copper coins from Cabanagem Revolution of 1835.',

  'Focal length 20mm. f16. 1/20s. ISO 100. film still of stream in the amazon forest, the river is in motion and the water is brown.',

  'Film still of a pile of printed newspapers being organized by paraense cabana women and men during Cabanagem revolution in 1823. Photographic facial details. Focal length 16mm. f/16. ISO 100. ',

  "Film Still POV of a wood canoe navigating in an Igapó in the amazonian forest. It's possible to see the river. Focal length 20mm. f/16. ISO 100.",

  'Focal length 16mm. f/16. ISO 100. Aerial Film still of Brigs and Fragatas in the Tapajós River during Cabanagem Revolution in 1835. The Background in the amazonian forest in Ilha das Cobras. Photographic details.',

  'Focal length 16mm. f/16. ISO 100. Aerial action scene films still of a crowd of Paraense Cabanos fighting against imperial oppression in Belém do Pará during the Cabanagem Revolution in 1835. The background in the city of Belém do Pará, close by Palácio Velho in 1835. The cabanos wear brown, white and red clothes. The scene has much movement.',

  'Focal length 16mm. f16/ ISO 100. Upper angle film still action scene of A crowd of cabanos in the streets of Belém do Pará fighting against the colonial regime in 1835 during Cabanagem Revolution. They wear brown, white and red simple clothes.',

  'Focal length 16mm. 1/20s. f/8. ISO 100. Film still of a huge Samaúma tree. At the ground we see the heavy roots in red-ish earth.',

  'A landscape film still photography of fragatas, brigs and corvetas in Belém do Pará during Cabanagem Revolution. In the background we see the dense amazonian forest. Focal length 50mm. f/16. Daylight colors. ISO 100. ',

  'Landscape still of Navy Fragatas, Brigs and Corvetas in Rio Marajó during Cabanagem Revolution in 1835 in the Amazon Forest. Photographic sharp and accurate details. Focal length 100mm. f/16. ISO 100. ',

  'A landscape film still photography of many fragatas, brigs and corvetas at Tapajós river in Belém do Pará during Cabanagem Revolution. In the background we see the dense amazonian forest of ilha das cobras. Focal length 16mm. f/16. Daylight colors. ISO 100.',

  'A color landscape film still photography of of corvetas, fragatas and brigs at Tapajós river in Belém do Pará during Cabanagem Revolution in 1865. In the foreground, a group os cabanos watches the landscape from an Igapó. In the background we see the dense amazonian forest of ilha das cobras. Focal length 20mm. f/16. ISO 100. ',

  'A landscape film still photography of a large mutiny of cabanos observing the landscape of Tapajós river during Cabanagem Revolution in a Igapó. Some of them wears straw hats. Focal length 150mm. f/16. Daylight colors. ISO 100. ',

  'A landscape film still photography of a large mutiny of cabanos observing the landscape of Tapajós river during Cabanagem Revolution in a Igapó. Focal length 150mm. f/16. Daylight colors. ISO 100.',

  'Film still action scene of a poor paraense cabana woman with indigenous traits preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1835. Her hair is free. The woman wears simple brown, white and red clothes. She has detailed photographic facial expressions. She is barefoot. The background is a training camp in an amazonian green forest. 35mm. ISO 100. Daylight.',

  "Wider angle Action Scene of a poor paraense cabocla cabana woman Cabanagem uprising in Belém do Pará in 1835. Bokeh. Focal length 20mm. f/2. ISO 100. Her hair is free, she doesn't use a band. She wears simple brown, white and red clothes, without any props. The background is a popular uprising in Belém do Pará with hundreds of people in 1835. She has detailed photographic expressions. Daylight.",

  'Wider angle Action Scene of a paraense black cabana woman during Cabanagem uprising in Belém do Pará in 1835. Bokeh. Focal length 20mm. f/2. ISO 100. Her hair is free. The background has a blurred brig. She wears simple brown, white and red clothes, without any props. The background is a popular uprising in Belém do Pará with hundreds of people in 1835. She has detailed photographic expressions. Daylight.',

  'Film still of a paraense cabano caboclo man with short hair preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. The background is the dense green amazonian forest. He wears only brown and red very simple clothes, without any props nor a hat. He is shirtless. He has detailed photographic facial expressions. ',

  'Film still of a mixed-race brown paraense woman preparing to fight against imperial forces during Cabanagem in Belém do Pará in 1855. Focal length 50mm. f/1.2. ISO 100. Bokeh. Daylight. The background is the dense green amazonian forest. She wears only brown and white very simple clothes, without any props. She has loose hair. She has detailed photographic facial expressions. ',

  'Aerial perspective landscape of dense amazonian forest with meanders of rivers. Igarapé. Igapó. Upper level. 45°. Focal length 100mm. f/22. ISO 100.',

  'Wide-angle film still of an old typographic press during Cabanagem revolution in Belém do Pará in 1835. The room has many windows and on the outside we can see Belém do Pará. High level of details in the shadows. The room has 5 cabano men working around on the typography. Photographic details. Focal length 16mm. f/22. RGB. ISO 100. ',

  'Upper Angle Drone action Scene of thousands of paraense, indigenous, and black cabanos man and woman people in the Cabanagem revolution in Belém do Pará in 1835. There’s fire in some areas of the scene. Focal length 16mm. ISO 100.',

  'Upper angle Action Scene Film still of thousands of paraense, indigenous, and black cabanos people fighting in Belém do Pará in 1835 during the Cabanagem revolution. The man and woman in the scene wear brown, white and red clothes, and have photographic facial expressions. Focal length 16mm. 1/125 s. f/16.',

  'Wide angle Film Still of Forte do Presépio in Belém do Pará. We see the entrance of the Forte. Photographic details. Focal length 35mm. ISO 100. 3pm.',

  'Action Scene Film Still of Forte do Presépio in Belém do Pará being taken over by cabanos during Cabanagem Revolution. Focal length 16mm. ISO 100. 3pm.',

  'Landscape Drone Film Still of dense amazonian forest in Arapiranga, in Belém do Pará. In the foreground we see Baía do Guajará. Focal length 28mm. f/22. ISO 100. Daylight. 6000k 3pm.',

  "Drone Angle Film still action Scene of thousands of paraense, indigenous, and black cabanos man and woman people fighting in Belém do Pará in 1835 during the Cabanagem revolution. There's a large Fire in the scene. Many people are raising their hands. They have photographic detailed facial expressions. Men and women wear red, brown and white dirty clothes. Focal length 14mm. ISO 100.",

  'Film still action Scene of hundreds of paraense people marching in Belém do Pará in 1835 during the Cabanagem revolution. photo-realist people wearing common brown and red clothes while they are marching, some of them carry guns. Some of them are looking up with detailed facial expressions. Brownish colors. Sharp details. Focal length 50mm. ISO 400.',

  'Realistic botanical photography of amazonian aningas as a monument to indigenous knowledge over the roof of the building. In the background we can see a cloudy sky. Focal length 100mm. f/16. ISO 100.',

  'Realistic botanical photography of many green leafs of aningá-açu Montrichardia linifera. In the background we can see a cloudy sky. Realistic botanical photography of a giant amazonian aningá flower, also with a leaf. In the background we can see a cloudy sky. Focal length 100mm. f/16. ISO 100.',

  'Realistic botanical photography of many giants amazonian aningá-açu leafs and trees. In the background we can see a cloudy sky. Realistic botanical photography of a giant amazonian aningá flower, also with a leaf. In the background we can see a cloudy sky. Focal length 100mm. f/16. ISO 100.',

  'Realistic botanical photography of giant leafs of amazonian aninga growing. In the background we can see a cloudy sky. Focal length 100mm. f/16. ISO 100. ',

  'Film still action scene of an indigenous cabana man preparing to fight against imperial forces in belém do Pará in 1835. background in the amazonian forest. red and white clothes.',

  'Film Still. ISO 400. Focal length 40mm. A group of cabana men and women are see celebrating in Praça Dom Pedro I, in Belém do Pará in 1855. They wear red, white, and brown clothes, and sometimes hats and have tools in their hands. A smaller group of people is seen in the building. Hundreds of people. One man is closer to the foreground and is seen with much detail and photo-realistic face expressions.',

  'A film still of heavy clouds in the sky. photo-realistic. a red flash depicting an indigenous man with bow and arrow is seen. Photo-realistic.',

  'A film still of Museu do Estado do Pará, in Belém do Pará. There is smoke and fire coming out of the windows. Morning colors, heavy clouds in the sky. The façade is painted in white. Photo-realistic. Focal length 16mm.',

  "A cinematic film still of a morning shoot showing the indigenous cabana man and woman insurgency taking over Palácio Lauro Sodré, Cabanagem also in Belém do Pará, in the neighborhood known as Cidade Velha. There's fire, people are running all over. There's heavy clouds in the sky. Photo-realistic. Focal length 40mm",

  'A photograph of a group of 20 indigenous cabanos by the river shore preparing to fight against imperial forces. The surrounding is made from amazonian vegetation. Photo-realistic.',

  'A landscape photography of a Portuguese corveta burning at Tapajós river in Belém do Pará. We see only a portion of the corveta. In the background we see a dense amazonian forest. Photo-realistic, high level and detail and sharpness.',

  'Mairamé arikú puyepé akayú amaã, yepé ara, yepé sangawa amurupí retana, yepé papera resé kaawasú resewara sera waá Mbeusawa uyusasá ana waá-itá. Aé umukameẽ yepé buyawasú umukuna uikú waá yepé suú kaapura. Xukúi sangawa.',

  'Aé umukameẽ yepé buyawasú umukuna uikú waá yepé suú kaapura',

  'A very detailed photograph taken from above of an old typographic press as seen on the amazonian jungle. Next to the typographic press, we see Felipe Patroni, a young man checking out the newspaper. 5 assistants are also seen in the area. In the upper background of the image, we can see the sky. Focal length 14mm',

  'A comprehensive wide-angle photograph an indigenous uprising while the native inhabitants are being dispossessed from their land, souls and sociability. The light is dramatic, with much detail on the shadows, and in the background we can see fragatas with smoke in the river shore. In the foreground, a woman from Cabanagem revolution rises stronger than ever. The city is Belém do Pará.',

  'Arasú kiseasú arã maniaka',

  'Amazon futuristic indigenous uprising hundreds of people, enhanced.',

  'An action wide angle photograph of two brothers distributing bulletins and leaflets to a group of people in the streets of Belém do Pará years before the Cabanagem revolution.',

  'Closeup action scene of a conflict between brazilian imperial army and indigenous cabanos in Belém do Pará.',
];

export default function GaleriaPrompts() {
  const lgMediaQuery = useMediaQuery('lg');
  const smMediaQuery = useMediaQuery('sm');
  const [itemsToShow, setItemsToShow] = useState(1);
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    setShowCarousel(true);
  }, []);

  useEffect(() => {
    if (lgMediaQuery) {
      setItemsToShow(5);
    } else if (smMediaQuery) {
      setItemsToShow(3);
    } else {
      setItemsToShow(1);
    }
  }, [lgMediaQuery, smMediaQuery]);

  const data = prompts.map((prompt, i) => ({
    value: prompt,
    key: i,
    count: Math.floor(Math.random() * 10),
  }));

  // console.log(data);

  //TagCloud custom renderer:
  // const customRenderer = (tag, size, color) => (
  //   <span
  //     key={tag.key}
  //     style={{
  //       maxWidth: '200px',
  //       maxHeight: '200px',
  //       width: 'content-fit',
  //       height: 'content-fit',
  //       padding: '2px',
  //       fontSize: `${size}px`,
  //       display: 'block',
  //     }}
  //     className='hover:scale-125 hover:text-blue-300 duration-300 hover:bg-black hover:text-[#d1d1d1]'
  //     // onMouseEnter={}
  //   >
  //     {tag.value}
  //   </span>
  // );

  return (
    <div className='flex pt-8  pb-32 md:pb-80 w-full' id='prompts'>
      {/* STICKY TITLE */}
      <div
        className='w-14 md:w-20 h-fit flex items-center sticky top-14 md:pt-4 shrink-0'
        style={{ writingMode: 'vertical-rl' }}
      >
        <div className='h-fit text-[11px] md:text-sm px-3 md:px-4 tracking-wider'>
          <span className='font-stanleybold'>ARQUIVO&ensp;&ensp;</span>
          <span>ENTRADAS DE TEXTO</span>
        </div>
      </div>
      {/* <div className='mr-4 w-full flex justify-center'> */}
      <div className='pb-20 md:pt-4 w-[calc(100%-4.5rem)] md:w-[calc(100%-6rem)] flex'>
        {/* <Carousel
          arrows={true}
          // dotsNavigation={true}
          // dotsNavigationInside={true}
          width={'95%'}
          height={'400px'}
          carouselStyle={'3d'}
          outOfFocusDarken={true}
        >
          {data.map((item, i) => (
            <div
              className='text-[11px] md:text-sm p-4 md:px-6 h-full flex items-center bg-slate-100'
              key={i}
            >
              {item.value}
            </div>
          ))}
        </Carousel> */}

        {showCarousel && (
          <div className='flex flex-col w-full'>
            <div className='w-full mb-4 p-4 bg-[#d6d5c2] rounded-sm text-sm md:text-md'>
              Nesta seção reunimos 150 entradas de texto criadas a partir do
              processo de edição e leituras dos escritos de Lúcio Flávio Pinto
              que foram utilizadas para a geração de imagens. Arraste para os
              lados para navegar. Deslize com o mouse ou o touch para ver todos
              os prompts. Para copiar os textos, faça três cliques na cartela.
            </div>
            <div className='block'>
              <ScrollingCarousel
                // style={{ paddingRight: '1rem' }}
                show={itemsToShow || 3}
                // slide={150}
                swiping={true}
                responsive={true}
                useArrowKeys={true}
                dynamic={true}
                rightArrow={
                  <div className='flex items-center h-full bg-black/5 rounded-r-sm'>
                    <IoIosArrowForward
                      className='cursor-pointer'
                      size={lgMediaQuery ? 30 : 15}
                      color={'grey'}
                    />
                  </div>
                }
                leftArrow={
                  <div className='flex items-center h-full bg-black/5 rounded-l-sm'>
                    <IoIosArrowBack
                      size={lgMediaQuery ? 30 : 15}
                      color={'grey'}
                      className='cursor-pointer'
                    />
                  </div>
                }
              >
                {data.slice(78, data.length - 1).map((item, i) => (
                  <div
                    className='text-[11px] border-[1px] border-b-0 border-r-0 border-black md:text-sm p-4 min-h-[300px] max-w-[280px] md:max-w-[400px] md:px-6 h-full flex items-center bg-slate-100'
                    key={i}
                  >
                    {item.value}
                  </div>
                ))}
              </ScrollingCarousel>
            </div>
            <div className='block'>
              <ScrollingCarousel
                // style={{ paddingRight: '1rem' }}
                show={itemsToShow || 3}
                // slide={150}
                swiping={true}
                responsive={true}
                useArrowKeys={true}
                dynamic={true}
                rightArrow={
                  <div className='flex items-center h-full bg-black/5 rounded-r-sm'>
                    <IoIosArrowForward
                      className='cursor-pointer'
                      size={lgMediaQuery ? 30 : 15}
                      color={'grey'}
                    />
                  </div>
                }
                leftArrow={
                  <div className='flex items-center h-full bg-black/5 rounded-l-sm'>
                    <IoIosArrowBack
                      size={lgMediaQuery ? 30 : 15}
                      color={'grey'}
                      className='cursor-pointer'
                    />
                  </div>
                }
              >
                {data.slice(0, 77).map((item, i) => (
                  <div
                    className='text-[11px] border-[1px] border-r-0 border-black md:text-sm p-4 min-h-[300px] max-w-[280px] md:max-w-[400px] md:px-6 h-full flex items-center bg-slate-100'
                    key={i}
                    // style={{ maxWidth: lgMediaQuery ? '25%' : '100%' }}
                  >
                    {item.value}
                  </div>
                ))}
              </ScrollingCarousel>
            </div>
          </div>
        )}

        {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 8 }}>
          <Masonry>
            {prompts.map((prompt) => {
              if (prompt) {
                return (
                  <div
                    className={`hover:scale-[3.5] cursor-default m-1 p-2 bg-[#efefef] text-[4px] duration-500 rounded-sm ease-in-out`}
                    key={prompt}
                  >
                    {prompt}
                  </div>
                );
              }
            })}
          </Masonry>
        </ResponsiveMasonry> */}
        {/* <TagCloud
          minSize={4}
          maxSize={12}
          tags={data}
          // onClick={(tag) => alert(`'${tag.value}' was selected!`)}
          colorOptions={{
            hue: 'monochrome',
            // luminosity: 'dark'
          }}
          // className='flex flex-wrap'
          renderer={customRenderer}
        /> */}
      </div>
      {/* </div> */}
    </div>
  );
}
