import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Plus, Minus, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import capovitezLogo from 'figma:asset/ee8f8545dad18dc5b362fcc32f41e729a657b33b.png';
import chettinadLogo from 'figma:asset/648addd6cd905a16a70f0841ab88595408492712.png';
import enilLogo from 'figma:asset/3948c92c417cd14a37c1e7404327037434a5a6af.png';
import galeriesLogo from 'figma:asset/dba96fda61fcaddf6a536716ddf30bc6cd56be42.png';
import howdenLogo from 'figma:asset/05f8b619ae1e447a27f0182bd458e3d59cd7b105.png';
import mirchiLogo from 'figma:asset/67bcad7062de3e160843ee4a866bb997ad0cdbf8.png';
import missIndiaLogo from 'figma:asset/47110e22525a86f7708687d327160c832b33dc82.png';
import nirmalLogo from 'figma:asset/7a550deaffe8ca609a436e3e1a22403a5eb6dc74.png';
import parksydeLogo from 'figma:asset/143cbc1e3910a5c14a10b24548f65e2507568004.png';
import adityaBirlaLogo from 'figma:asset/f18f5a5287bdb16541ae1e5cf9d714cfa9dae0fe.png';
import worldBankLogo from 'figma:asset/83147915d5cb5bf8c6d5a1b56b42558c3a11111e.png';
import suttattiLogo from 'figma:asset/57c618288600296e6e257293069781cd314e3df2.png';
import rahejaUniversalLogo from 'figma:asset/313c74ed29ee94aa047f942139decfffd8aa8b80.png';
import tableSpaceLogo from 'figma:asset/f7ac8eac76909b8f59c55391bf77611fbc7aedfd.png';
import timesNetworkLogo from 'figma:asset/56af81cf2f2fe44c3e4734398b67a2c983c6f3ea.png';
import timesMusicLogo from 'figma:asset/5da83aaf7b3fec7650755551d00410b02102bbd4.png';
import timesGroupLogo from 'figma:asset/5306657025de7b13e2f59a1fb3f24656f20025b1.png';
import unileverFragranceLogo from 'figma:asset/4c94c12ca8875a52c885834941eaeabb7b493cae.png';
import ubsLogo from 'figma:asset/6d16ec7e15db1d1b25cec11cf14c9691e5d19621.png';
import unileverLogo from 'figma:asset/a3236b9a3f4a8da160da0d8f548c96489369359c.png';

import timesReception from '../assets/projects/times-group/TOIG_Reception-01-7352116a-3b59-4203-b433-13bdc89b0fa8.jpg';
import timesExec01 from '../assets/projects/times-group/TOIG_Executive_Area-01-49b68ec2-4810-42c3-9376-c31fc13841fa.jpg';
import timesExec02 from '../assets/projects/times-group/TOIG_Executive_Area-02-df426e16-4df0-401b-a98f-ea877f6fb2b0.jpg';
import timesExec03 from '../assets/projects/times-group/TOIG_Executive_Area-03-96ffac74-7fd3-4f3e-baf6-ead0b105bd8b.jpg';
import timesExec04 from '../assets/projects/times-group/TOIG_Executive_Area-04-1d9a0041-9488-4466-b8a3-8ee4649d32c8.jpg';
import timesDayCare from '../assets/projects/times-group/TOIG_Day_Care-01-5725c305-7ba5-480a-b74c-683355f04a1b.jpg';
import timesCafe from '../assets/projects/times-group/TOIG_Cafe-01-ab0f93ae-d107-4d1a-a03e-4c573faef851.jpg';
import timesGym from '../assets/projects/times-group/TOIG_Gym-01-5d2f1f36-7ede-458a-84d4-7841d672beb3.jpg';
import timesTraining from '../assets/projects/times-group/TOIG_Training-01-75567fbb-9fc9-46aa-9e9c-e1f04e6170c8.jpg';
import timesTerrace01 from '../assets/projects/times-group/TOIG_Terrace-01-326a04c9-cc7a-49bd-a413-dbc009d346a1.jpg';
import timesTerrace02 from '../assets/projects/times-group/TOIG_Terrace-02-da9d8930-089d-4237-b593-c3493818522f.jpg';
import timesTerrace03 from '../assets/projects/times-group/TOIG_Terrace-03-59e9e3e1-7aaa-4cc0-b0f9-cb6ccbb2b624.jpg';

import nirmalMeeting01 from '../assets/projects/nirmal/Nirmal_Meeting-01-ccee919f-8840-4c87-87a6-73ef6f2f9312.jpg';
import nirmalMeeting02 from '../assets/projects/nirmal/Nirmal_Meeting-02-ce7cb4c5-fdd2-4fdc-86af-c2ab213420d6.jpg';
import nirmalMeeting03 from '../assets/projects/nirmal/Nirmal_Meeting-03-ae2f8d67-6a4c-4678-b46c-87850f69e0ee.jpg';
import nirmalOffice01 from '../assets/projects/nirmal/Nirmal_Office-01-67726dc8-89e9-496f-b2c4-52495dd11409.jpg';
import nirmalOffice02 from '../assets/projects/nirmal/Nirmal_Office-02-3b29040b-6d96-4f8f-a045-d91827a5403e.jpg';
import nirmalCafe from '../assets/projects/nirmal/Nirmal_Cafe-01-cb662323-a48c-4342-b68a-df1d28bd57db.jpg';

import mirchiReception from '../assets/projects/mirchi/Mirchi_Reception-01-a32c7540-b97c-414c-82a1-eafee972bb8e.jpg';
import mirchiRadioStudio from '../assets/projects/mirchi/Mirchi_Radio_Studio-01-77131778-2117-411b-aedb-1d712c2b5a51.jpg';
import mirchiGaanaStudio from '../assets/projects/mirchi/Mirchi_Gaana_Studio-01-87142291-d256-4234-bc05-59c22fd52cd2.jpg';
import mirchiDressing from '../assets/projects/mirchi/Mirchi_Dressing_Room-01-80455b3a-39b0-4806-8855-4a7380647ac5.jpg';
import mirchiOffice from '../assets/projects/mirchi/Mirchi_Office-01-25a79d89-95fc-4c64-92d0-a4a1aa66c690.jpg';
import mirchiCollab from '../assets/projects/mirchi/Mirchi_Collab-01-22078e60-8f00-44cb-8e22-736a65dc88fa.jpg';

import tsReception from '../assets/projects/tablespace/TS_Reception-01-eb5d3187-143a-45f3-b60d-847ec56f2b5a.jpg';
import tsOffice from '../assets/projects/tablespace/TS_Office-01-7a8b7451-5be4-441e-9fd9-536b33d6fc77.jpg';
import tsLiftLobby from '../assets/projects/tablespace/TS_Lift_Lobby-01-41562ce3-1d3c-4a09-9ae3-b2813427a219.jpg';
import tsPassage from '../assets/projects/tablespace/TS_Passage-01-56b2c1de-403a-4d90-921f-f55e900ccc19.jpg';
import tsMeeting from '../assets/projects/tablespace/TS_Meeting-01-69736bd5-1311-4cf9-8591-64c9fca4df64.jpg';
import tsToilet from '../assets/projects/tablespace/TS_Toilet-01-560c52bd-103a-4156-aaec-a3e4c089f16d.jpg';

import suttattiReception from '../assets/projects/suttatti/Suttatti_Reception-01-78f9f7fc-db39-4838-b77e-4cf6741eb084.jpg';
import suttattiOffice from '../assets/projects/suttatti/Suttatti_Office-01-49c2093f-383b-485d-8672-576acb642176.jpg';
import suttattiCabin from '../assets/projects/suttatti/Suttatti_Cabin-01-abccd0a7-b433-4b1c-a121-080c2406f857.jpg';

import timesNetworkCabin from '../assets/projects/times-network/Times_Network_Cabin-01-7e1f0c24-1b7d-4580-a55e-da7f313d5b16.jpg';
import timesNetworkMeeting from '../assets/projects/times-network/Times_Network_Meeting-01-6bca78b4-8dce-45d2-9acb-ab667328f724.jpg';
import timesNetworkOffice from '../assets/projects/times-network/Times_Network_Office-01-ce120d40-2f04-4491-a0bd-abf3ff77d3f7.jpg';

import parksydeReception01 from '../assets/projects/parksyde/Parksyde_Reception-01-d5e1a53b-0601-407b-8aef-7fd82ac2bbc2.jpg';
import parksydeReception02 from '../assets/projects/parksyde/Parksyde_Reception-02-2b374bce-2dd5-4a33-8727-f47cb2611831.jpg';
import parksydeOffice from '../assets/projects/parksyde/Parksyde_Office-01-8f23c5b4-4689-4883-878f-05612d7b4844.jpg';

import wwmCabin from '../assets/projects/worldwide-media/World_Wide_Media_Cabin-01-c98e05be-33e1-4355-b027-4396e84b9321.jpg';
import wwmCollab from '../assets/projects/worldwide-media/World_Wide_Media_Collab-01-96f6c045-0d13-45d7-9aad-13375e77d6eb.jpg';
import wwmMeeting from '../assets/projects/worldwide-media/World_Wide_Media_Meeting-01-7d7d3460-4185-4504-9cc4-2aca6882ebee.jpg';

import abfrlReception from '../assets/projects/abfrl/ABFRL_Reception-01-95815942-dc0d-41a2-8eb0-20649ffa4ffc.jpg';
import abfrlCeoCabin from '../assets/projects/abfrl/ABFRL_CEO_Cabin-01-119f2137-39b9-4b52-949e-bd23fae4eaae.jpg';
import abfrlCabinCluster from '../assets/projects/abfrl/ABFRL_Cabin_Cluster-01-9c235add-1f07-422f-bb3d-af6cb41cbf77.jpg';
import abfrlOffice01 from '../assets/projects/abfrl/ABFRL_Office-01-737b7c72-3fd0-49de-aad2-953df8412937.jpg';
import abfrlOffice02 from '../assets/projects/abfrl/ABFRL_Office-02-9a8ab241-73c4-4639-ae36-6013d90710e3.jpg';
import abfrlCollab01 from '../assets/projects/abfrl/ABFRL_Collab-01-ad4f704b-9e49-456d-907f-db07552ae652.jpg';
import abfrlCollab02 from '../assets/projects/abfrl/ABFRL_Collab-02-fe3e6690-9078-4dbf-ade7-e242579efb75.jpg';
import abfrlConference from '../assets/projects/abfrl/ABFRL_Conference-01-6265c836-b5b8-47c2-b8a2-67e24f3b523e.jpg';
import abfrlPhonebooth from '../assets/projects/abfrl/ABFRL_Phonebooth-01-28ca1171-2adf-4346-be2b-255179ece565.jpg';

import mioPreFunction01 from '../assets/projects/miss-india/MIO_Pre-Function-01-f8b62cb2-f5ac-438d-8dbf-1fec4386b52d.jpg';
import mioPreFunction02 from '../assets/projects/miss-india/MIO_Pre-Function-02-ecb8b198-b172-45af-9569-4804129e084a.jpg';
import mioAuditorium from '../assets/projects/miss-india/MIO_Auditorium-01-81bccf0c-f52d-45e7-ad69-8d40df3a5418.jpg';

import ctoMainReception from '../assets/projects/chettinad-cto/CTO_Main_Reception-01-0183d5f9-6d5d-4bda-a457-f698986c3d03.jpg';
import ctoReception01 from '../assets/projects/chettinad-cto/CTO_Reception-01-b1d3f588-7d54-43d7-94a7-7d15f296a856.jpg';
import ctoReception02 from '../assets/projects/chettinad-cto/CTO_Reception-02-7fd474fe-ab2d-4d09-a016-4e32f2bcc822.jpg';
import ctoOffice from '../assets/projects/chettinad-cto/CTO_Office-01-2f16d180-2d55-48e9-aa25-cfe8879fa95c.jpg';
import ctoCafe from '../assets/projects/chettinad-cto/CTO_Cafe-01-eaa3d059-bbbc-408c-84da-f3070d780f2e.jpg';
import ctoExterior from '../assets/projects/chettinad-cto/CTO_Exterior-01-4a754752-609c-4693-b54e-0dc82b0fcfb1.jpg';

import ccoReceptionLobby01 from '../assets/projects/chettinad-common/CCO_Common_Areas_Reception_Lobby-01-f11bc467-a601-4a94-bd01-f5e3f40e79e6.jpg';
import ccoReceptionLobby02 from '../assets/projects/chettinad-common/CCO_Common_Areas_Reception_Lobby-02-93f2344e-1574-4c2e-b342-132463537727.jpg';
import ccoLiftLobby from '../assets/projects/chettinad-common/CCO_Common_Areas_Lift_Lobby-01-784914d3-78e5-45e7-bad8-0fc30af4a9cf.jpg';

import cco11Reception from '../assets/projects/chettinad-cco-11-12/CCO_11th_Floor_Reception-01-1732bcf9-a81b-49f1-8b50-0e356b8e6fe7.jpg';
import cco11Collab01 from '../assets/projects/chettinad-cco-11-12/CCO_11th_Floor_Collab-01-81231c34-adc3-4d3c-bc0b-08de0d168b80.jpg';
import cco11Collab02 from '../assets/projects/chettinad-cco-11-12/CCO_11th_Floor_Collab-02-ecf130e5-f750-4c8a-8aab-3378f4810bfb.jpg';
import cco11Collab03 from '../assets/projects/chettinad-cco-11-12/CCO_11th_Floor_Collab-03-ac59d67e-f9d3-4423-ba3c-f37f7348fe45.jpg';
import cco11Meeting from '../assets/projects/chettinad-cco-11-12/CCO_11th_Floor_Meeting-01-0729c2ab-37cc-42c4-a19e-b8eb060aacda.jpg';
import cco11Cafe from '../assets/projects/chettinad-cco-11-12/CCO_11th_Floor_Cafe-01-d6f0e5e1-df6d-46f4-8f87-9c3bb74ae39a.jpg';

import cco13Reception01 from '../assets/projects/chettinad-cco-13/01-Reception-01A-65585074-8de5-4a37-9bd6-826f28a09f28.jpg';
import cco13Reception02 from '../assets/projects/chettinad-cco-13/02-Reception-02A-beffb166-e5f4-41f1-9b30-445065e785dd.jpg';
import cco13BoardRoom from '../assets/projects/chettinad-cco-13/03-Board_Room-03-ef2ca75c-9e3f-42fd-a051-1a018a740cba.jpg';
import cco13MdCabin from '../assets/projects/chettinad-cco-13/04-MD_Cabin-04A-f7107f69-8bcc-4b77-80d6-520c64b12c64.jpg';
import cco13CoffeeBar from '../assets/projects/chettinad-cco-13/06-Coffee_Bar-01-0185693f-bb87-43c7-94b4-0d2e6e3dea28.jpg';
import cco13LivingRoom from '../assets/projects/chettinad-cco-13/06-Living_Room-01-4abac1d6-6faa-44ba-8917-d7f7e0619f30.jpg';

import howdenReception from '../assets/projects/howden/Howden_Reception-01-44b20409-c431-42ec-9acb-dac2a617480f.jpg';
import howdenCollab01 from '../assets/projects/howden/Howden_Collab-01-288b754a-7e41-4bf4-977a-e1a3f95e10fe.jpg';
import howdenCollab02 from '../assets/projects/howden/Howden_Collab-02-5a05babc-8efe-47fb-b1d6-4354ea37d5f0.jpg';
import howdenCollab03 from '../assets/projects/howden/Howden_Collab-03-00b6b157-af3e-458b-8a33-13ef3fa9780d.jpg';
import howdenBoardRoom from '../assets/projects/howden/Howden_Board_Room-01-abb7b1d0-b7bb-457b-89cc-c7469028ea5e.jpg';
import howdenMeeting from '../assets/projects/howden/Howden_Meeting-01-aef6eca3-71eb-42cb-b03e-31dc8d00cf55.jpg';

import ufhReception from '../assets/projects/unilever-fragrance/UFH_Reception-01-182fd132-b1d1-4692-bac7-abb0a5167329.jpg';
import ufhHairWash from '../assets/projects/unilever-fragrance/UFH_Hair_Wash-01-0d2fd18a-3c30-4fda-92de-cea535c412c9.jpg';
import ufhOffice from '../assets/projects/unilever-fragrance/UFH_Office-01-f9e6a5ce-8e8b-46a2-a338-b21cceed6b57.jpg';
import ufhCompoundLab from '../assets/projects/unilever-fragrance/UFH_Compound_Lab-01-af8e18b6-f856-4251-b962-a8a5cedb9d97.jpg';
import ufhPassage from '../assets/projects/unilever-fragrance/UFH_Passage-01-909bfc46-6d9c-44db-9b8d-0f526f18f8c4.jpg';
import ufhEvaluation from '../assets/projects/unilever-fragrance/UFH_Evaluation_Chambers-01-2223e8e7-7aae-40be-bfd3-c89b43966e32.jpg';

import rahejaReception01 from '../assets/projects/raheja/Raheja_Universal_Reception-01-174011fb-68d8-443b-963f-da611d9b47ca.jpg';
import rahejaReception02 from '../assets/projects/raheja/Raheja_Universal_Reception-02-22e7261e-8770-4117-97c6-827073bc70c5.jpg';
import rahejaSkyLounge from '../assets/projects/raheja/Raheja_Universal_Sky_Lounge-01-fe23edb6-3bc0-4c66-bbc3-63c2005987b2.jpg';
import rahejaCafe from '../assets/projects/raheja/Raheja_Universal_Cafe-01-a7dd4260-3f6e-4a4d-b9ec-b63b3eb97f99.jpg';
import rahejaMumpty from '../assets/projects/raheja/Raheja_Universal_Mumpty-01-983bf4c2-f6cc-4efe-a405-36b5f3fc9c91.jpg';
import rahejaCompoundWall from '../assets/projects/raheja/Raheja_Universal_Compound_Wall-01-e031d63b-2622-46d4-8489-f8fa07c88c78.jpg';

import hulReception from '../assets/projects/hul/HUL_Reception-01-e7a5b2a6-abf0-4dda-b508-41d78721a3a6.jpg';
import hulOffice from '../assets/projects/hul/HUL_Office-01-e4381703-c553-4b82-98f7-8d164319270e.jpg';
import hulCollab from '../assets/projects/hul/HUL_Collab-01-48d6e969-6f1e-4ea6-ad84-7e8c544cce4b.jpg';
import hulCafe from '../assets/projects/hul/HUL_Cafe-01-a1447c2f-bb21-4e93-b7ec-b69ac8d04d77.jpg';
import hulWorkCafe from '../assets/projects/hul/HUL_Work_Cafe-01-b7c14442-f770-4350-97ef-8c0cf6e8d091.jpg';
import hulLiftLobby from '../assets/projects/hul/HUL_Lift_Lobby-01-03d2291d-269c-4f47-9f8d-88ac94101718.jpg';

import timesMusicMeeting from '../assets/projects/times-music/Times_Music_Meeting-01-4db0a9f1-d671-4e2b-8313-ab3ec66198af.jpg';
import timesMusicCabin from '../assets/projects/times-music/Times_Music_Cabin-01-c7ade669-7d1f-4a9e-95fe-5ab9d6b5b866.jpg';
import timesMusicOffice from '../assets/projects/times-music/Times_Music_Office-01-79ba8f88-f5e4-4264-9cc6-d5ff119436ee.jpg';

import ubsNocRoom from '../assets/projects/ubs/UBS_NOC_Room-01-da612531-f6ca-434c-a539-34616f337ea9.jpg';
import ubsBusinessCafe from '../assets/projects/ubs/UBS_Business_Cafe-01-10d3adab-3530-4b4b-9931-860b06e3c691.jpg';
import ubsBusinessGarden from '../assets/projects/ubs/UBS_Business_Garden-01-d5989ad8-4359-4128-b518-293dae39fcff.jpg';

import bethatArrivals01 from '../assets/projects/bethat-space/BethatSpace_Arrivals-01-a6009140-e2d6-4ca4-801b-d28d9174b8f1.jpg';
import bethatArrivals02 from '../assets/projects/bethat-space/BethatSpace_Arrivals-02-528f6423-dd66-432b-9681-b5df532684ad.jpg';
import bethatBoardRoom from '../assets/projects/bethat-space/BethatSpace_Board_Room-01-7519096a-d9a8-4fdb-8f60-dcb0c8fe646f.jpg';
import bethatOffice01 from '../assets/projects/bethat-space/BethatSpace_Office-01-fcffe002-53ee-4216-a0b2-f41c4d2f09b0.jpg';
import bethatOffice02 from '../assets/projects/bethat-space/BethatSpace_Office-02-4069ee64-78d9-402b-813e-7193025b449f.jpg';
import bethatCollab from '../assets/projects/bethat-space/BethatSpace_Collab-01-77a93f20-95b1-4dc1-bddf-596e041fcf8c.jpg';

import uniExterior from '../assets/projects/uni-deritrend/Neterwal-Exterior-01-df250d5a-4d4e-4ae3-aa1e-db07da0c646c.jpg';
import uniExperience from '../assets/projects/uni-deritrend/Neterwal-Experience_Center-01-2a40020d-e529-4cce-bbf1-ff90a072719c.jpg';
import uniOffice01 from '../assets/projects/uni-deritrend/Neterwal-Office-01-eafb0438-58d1-47b3-9ddf-63b180e44936.jpg';
import uniOffice02 from '../assets/projects/uni-deritrend/Neterwal-Office-02-7a7552c7-b2f0-4de4-9e17-51a481271ac8.jpg';
import uniOffice03 from '../assets/projects/uni-deritrend/Neterwal-Office-03-546135bf-35e9-4d1f-8bc5-498f36a9de4c.jpg';
import uniTraining from '../assets/projects/uni-deritrend/Neterwal-Training-01-ccb85526-7c64-4ba4-bf30-35a9b245d38a.jpg';

import vertivReception from '../assets/projects/vertiv/Vertiv_Reception-01-5cefce7a-a3b8-4a3a-a989-ee909197408d.jpg';
import vertivExperience from '../assets/projects/vertiv/Vertiv_Experience_Center-01-6caac3c7-4b3d-46d5-b4ad-ebf9bac9fcf9.jpg';
import vertivCafe from '../assets/projects/vertiv/Vertiv_Cafe-01-89ba0b42-5861-49b6-9a1c-62a27ab1e58f.jpg';
import vertivCollab from '../assets/projects/vertiv/Vertiv_Collab-01-4796a669-1de8-4a73-aae3-7898a1e849cf.jpg';
import vertivLounge from '../assets/projects/vertiv/Vertiv_Lounge_area_-6ac2d1e6-c887-4a3c-a4b7-e4f922de9974.jpg';
import vertivOffice from '../assets/projects/vertiv/Vertiv_Office-02-7372b217-12d2-4035-b5a6-d7b762a68644.jpg';

import orientalExterior from '../assets/projects/oriental/Oriental_Option-01-56d1a65a-e840-4b5f-836e-3aa5d363c0e3.jpg';

/** Featured grid order — match by title + type (titles can repeat). */
const FEATURED_PROJECTS = [
  { title: 'The Times Group', type: 'Corporate Office' },
  { title: 'Hindustan Unilever', type: 'Regional Office' },
  { title: 'UBS', type: 'Command Centre' },
  { title: 'Chettinad Group', type: 'Corporate Office' },
  { title: 'Galeries Lafayette (Aditya Birla Fashion & Retail)', type: 'Corporate Office' },
  { title: 'ENIL (Radio Mirchi)', type: 'Corporate Office & Studios' },
] as const;

export function ProjectsClients() {
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projectsList = [
    {
      title: 'The Times Group',
      type: 'Corporate Office',
      location: 'Mumbai, India',
      description: 'A landmark corporate workplace for The Times Group in Mumbai. Reception, executive areas, training, daycare, cafe, gym, and terraces were designed as one cohesive environment that reflects brand, culture, and everyday media operations.',
      images: [
        timesReception,
        timesExec01,
        timesExec02,
        timesExec03,
        timesExec04,
        timesDayCare,
        timesCafe,
        timesGym,
        timesTraining,
        timesTerrace01,
        timesTerrace02,
        timesTerrace03,
      ],
    },
    {
      title: 'Nirmal Industrial Controls',
      type: 'Corporate Office',
      location: 'Thane, India',
      description: 'Corporate office interiors for Nirmal Industrial Controls in Thane. Meeting rooms, open workstations, and cafe spaces balance industrial character with a colourful, collaborative workplace.',
      images: [
        nirmalOffice01,
        nirmalOffice02,
        nirmalMeeting01,
        nirmalMeeting02,
        nirmalMeeting03,
        nirmalCafe,
      ],
    },
    {
      title: 'ENIL (Radio Mirchi)',
      type: 'Corporate Office & Studios',
      location: 'Mumbai, India',
      description: 'Corporate office and broadcast studios for ENIL (Radio Mirchi) in Mumbai. Reception, radio and Gaana studios, dressing room, collaboration zones, and open office. Brand-led spaces built for media and sound.',
      images: [
        mirchiReception,
        mirchiRadioStudio,
        mirchiGaanaStudio,
        mirchiDressing,
        mirchiOffice,
        mirchiCollab,
      ],
    },
    {
      title: 'Tablespace Suites',
      type: 'Premium Managed Office',
      location: 'Mumbai, India',
      description: 'Premium managed office environments for Tablespace Suites in Mumbai. Reception, workstations, meeting rooms, lift lobby, passages, and amenities. A polished client-facing workplace.',
      images: [
        tsReception,
        tsOffice,
        tsMeeting,
        tsLiftLobby,
        tsPassage,
        tsToilet,
      ],
    },
    {
      title: 'Suttatti Enterprises',
      type: 'Corporate Office',
      location: 'Pune, India',
      description: 'Corporate office design for Suttatti Enterprises in Pune. Reception, open office, and executive cabin. A clear contemporary workplace for leadership, teams, and visitors.',
      images: [
        suttattiReception,
        suttattiOffice,
        suttattiCabin,
      ],
    },
    {
      title: 'Times Network',
      type: 'Corporate Office',
      location: 'Mumbai, India',
      description: 'Corporate office interiors for Times Network in Mumbai. Cabin, meeting rooms, and open office. Spaces that support newsroom pace, collaboration, and brand presence.',
      images: [
        timesNetworkOffice,
        timesNetworkMeeting,
        timesNetworkCabin,
      ],
    },
    {
      title: 'Jaikumar Constructions (Parksyde)',
      type: 'Corporate Office',
      location: 'Nasik, India',
      description: 'Corporate office for Jaikumar Constructions (Parksyde) in Nasik. Reception lobby and workplace interiors express the developer’s identity while supporting day-to-day operations.',
      images: [
        parksydeReception01,
        parksydeReception02,
        parksydeOffice,
      ],
    },
    {
      title: 'Worldwide Media',
      type: 'Corporate Office',
      location: 'Mumbai, India',
      description: 'Corporate office for Worldwide Media in Mumbai. Cabins, collaboration zones, and meeting rooms. A workplace designed for focus, teamwork, and brand storytelling.',
      images: [
        wwmCollab,
        wwmMeeting,
        wwmCabin,
      ],
    },
    {
      title: 'Galeries Lafayette (Aditya Birla Fashion & Retail)',
      type: 'Corporate Office',
      location: 'Mumbai, India',
      description: 'Corporate office for Galeries Lafayette (Aditya Birla Fashion & Retail) in Mumbai. Reception, cabins, open office, collaboration zones, conference, and phone booths. Retail heritage in a refined workplace.',
      images: [
        abfrlReception,
        abfrlCeoCabin,
        abfrlCabinCluster,
        abfrlOffice01,
        abfrlOffice02,
        abfrlCollab01,
        abfrlCollab02,
        abfrlConference,
        abfrlPhonebooth,
      ],
    },
    {
      title: 'Miss India Organization (Femina Miss India)',
      type: 'Corporate Office',
      location: 'Mumbai, India',
      description: 'Corporate office for the Miss India Organization (Femina Miss India) in Mumbai. Pre-function galleries and auditorium. Brand-led interiors for events, operations, and culture.',
      images: [
        mioPreFunction02,
        mioAuditorium,
        mioPreFunction01,
      ],
    },
    {
      title: 'Chettinad Products & Services',
      type: 'Corporate Office',
      location: 'Chennai, India',
      description: 'Corporate office for Chettinad Products & Services in Chennai. Reception, workspace, cafe, and exterior. Functional planning and material quality for a professional technical workplace.',
      images: [
        ctoMainReception,
        ctoReception01,
        ctoReception02,
        ctoOffice,
        ctoCafe,
        ctoExterior,
      ],
    },
    {
      title: 'Chettinad Group',
      type: 'Common Areas',
      location: 'Chennai, India',
      description: 'Common areas for the Chettinad Group in Chennai. Reception lobby and lift lobby. Shared spaces that elevate arrival, circulation, and informal meeting for a multi-entity corporate campus.',
      images: [
        ccoReceptionLobby01,
        ccoReceptionLobby02,
        ccoLiftLobby,
      ],
    },
    {
      title: 'Chettinad Group',
      type: 'Corporate Office',
      location: 'Chennai, India',
      description: 'Corporate office floors for the Chettinad Group in Chennai. Reception, collaboration, meeting, and cafe. Consistent design language across floors for brand cohesion and everyday work.',
      images: [
        cco11Reception,
        cco11Collab01,
        cco11Collab02,
        cco11Collab03,
        cco11Meeting,
        cco11Cafe,
      ],
    },
    {
      title: 'Chettinad Group',
      type: 'Family Office',
      location: 'Chennai, India',
      description: 'Family office interiors for Chettinad Group in Chennai. Reception, board room, MD cabin, coffee bar, and living room. Private, composed spaces for leadership and family business.',
      images: [
        cco13Reception01,
        cco13Reception02,
        cco13BoardRoom,
        cco13MdCabin,
        cco13CoffeeBar,
        cco13LivingRoom,
      ],
    },
    {
      title: 'Howden Insurance',
      type: 'Corporate Office',
      location: 'Mumbai, India',
      description: 'Corporate office for Howden Insurance in Mumbai. Reception, collaboration, board room, and meeting. Client-facing and team spaces that balance professionalism and operational efficiency.',
      images: [
        howdenReception,
        howdenCollab01,
        howdenCollab02,
        howdenCollab03,
        howdenBoardRoom,
        howdenMeeting,
      ],
    },
    {
      title: 'Unilever Fragrance House',
      type: 'Innovation Lab',
      location: 'Mumbai, India',
      description: 'Innovation lab for Unilever Fragrance House in Mumbai. Reception, compound lab, evaluation chambers, hair wash, and office. Sensory-driven environments for product development and creative collaboration.',
      images: [
        ufhReception,
        ufhOffice,
        ufhCompoundLab,
        ufhEvaluation,
        ufhHairWash,
        ufhPassage,
      ],
    },
    {
      title: 'Raheja Universal',
      type: 'Corporate Office',
      location: 'Mumbai, India',
      description: 'Corporate office for Raheja Universal in Mumbai. Reception, sky lounge, cafe, mumpty, and compound. Developer headquarters with clear zoning for leadership, sales, and project teams.',
      images: [
        rahejaReception01,
        rahejaReception02,
        rahejaSkyLounge,
        rahejaCafe,
        rahejaMumpty,
        rahejaCompoundWall,
      ],
    },
    {
      title: 'Hindustan Unilever',
      type: 'Regional Office',
      location: 'Navi Mumbai, India',
      description: 'Regional office for Hindustan Unilever in Navi Mumbai. Reception, office, collaboration, cafe, and lift lobby. Scalable workplace planning for brand standards and regional operations.',
      images: [
        hulReception,
        hulOffice,
        hulCollab,
        hulCafe,
        hulWorkCafe,
        hulLiftLobby,
      ],
    },
    {
      title: 'Times Music',
      type: 'Corporate Office & Studios',
      location: 'Mumbai, India',
      description: 'Corporate office and studios for Times Music in Mumbai. Meeting, cabin, and open office. Acoustic-sensitive design meets brand expression for a music-first workplace.',
      images: [
        timesMusicMeeting,
        timesMusicCabin,
        timesMusicOffice,
      ],
    },
    {
      title: 'UBS',
      type: 'Command Centre',
      location: 'Pune, India',
      description: 'Command centre for UBS in Pune. NOC room, business cafe, and garden. High-performance interiors for monitoring, decision-making, and continuous operations.',
      images: [
        ubsNocRoom,
        ubsBusinessCafe,
        ubsBusinessGarden,
      ],
    },
    {
      title: 'BeThat Space',
      type: 'Corporate Office & Design Studio',
      location: 'Thane, India',
      description: 'Our own corporate office and design studio in Thane. Arrivals, board room, office, and collaboration. A living lab for how we design, collaborate, and deliver spatial experiences.',
      images: [
        bethatArrivals01,
        bethatArrivals02,
        bethatBoardRoom,
        bethatOffice01,
        bethatOffice02,
        bethatCollab,
      ],
    },
    {
      title: 'Confidential',
      type: 'Plant Office',
      location: 'Nasik, India',
      description: 'Plant office for a confidential client in Nasik. Exterior, experience center, office, and training. Industrial adjacency with office comfort for plant leadership and operations.',
      images: [
        uniExterior,
        uniExperience,
        uniOffice01,
        uniOffice02,
        uniOffice03,
        uniTraining,
      ],
    },
    {
      title: 'Confidential',
      type: 'Corporate Office',
      location: 'Mumbai, India',
      description: 'Corporate office for a confidential client in Mumbai. Reception, experience center, cafe, collaboration, lounge, and office. Technical brand identity as a clear, efficient workplace.',
      images: [
        vertivReception,
        vertivExperience,
        vertivCafe,
        vertivCollab,
        vertivLounge,
        vertivOffice,
      ],
    },
    {
      title: 'Confidential',
      type: 'Mixed Use',
      location: 'Navi Mumbai, India',
      description: 'Mixed-use interiors for a confidential client in Navi Mumbai. Multiple programmes coordinated under one spatial identity.',
      images: [orientalExterior],
    },
  ];

  const isFeatured = (project: { title: string; type: string }) =>
    FEATURED_PROJECTS.some((f) => f.title === project.title && f.type === project.type);

  const projects = [
    ...FEATURED_PROJECTS.map(
      (f) => projectsList.find((project) => project.title === f.title && project.type === f.type)!
    ),
    ...projectsList.filter((project) => !isFeatured(project)),
  ];

  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, FEATURED_PROJECTS.length);

  const clientsRow1 = [
    'Amazon', 'American Express', 'Accor', 'Veolia', 'Chanel', 'Blackstone',
    'Brookfield', 'Reliance'
  ];
  
  const clientsRow2 = [
    'Hermès', 'Hero', 'Pernod Ricard', 'Trilegal',
    'Julius Bär', 'IWC', 'Microsoft', 'BMW'
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % visibleProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + visibleProjects.length) % visibleProjects.length);
  };

  const openModal = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => (prev + 1) % projects[selectedProject].images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => (prev - 1 + projects[selectedProject].images.length) % projects[selectedProject].images.length);
    }
  };

  // Auto-play carousel when modal is open
  useEffect(() => {
    if (selectedProject !== null && !isCarouselHovered && projects[selectedProject].images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % projects[selectedProject].images.length);
      }, 2000); // Change image every 2 seconds

      return () => clearInterval(interval);
    }
  }, [selectedProject, isCarouselHovered, projects, currentImageIndex]);

  return (
    <section id="projects" className="explore-section relative bg-black overflow-visible">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 bts-shell w-full">
        {/* PROJECTS SECTION */}
        <div className="mb-12">
          <div className="bts-section-head mb-6">
            <h2 className="bts-title">Projects</h2>
            <div className="bts-bar-wrap">
              <div className="bts-bar" />
            </div>
          </div>
          <div className="main-copy">
          <p className="main-sub text-center text-white text-xl lg:text-2xl font-semibold mb-6">
            Ideas Made Real.
          </p>
          <div className="bts-body text-white/70 text-base lg:text-lg">
            <p>
              Every project begins with a different set of aspirations, challenges and possibilities. Our work brings these together through considered design, technical integration and disciplined execution. Explore the spaces we have helped shape, and the thinking behind them.
            </p>
          </div>
          </div>
        </div>

        {/* Desktop: Project grid — top 6, rest on Read More */}
        <div className="hidden lg:block">
          <div className="main-copy project-cards grid lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleProjects.map((project) => {
              const index = projects.findIndex((p) => p.title === project.title && p.images[0] === project.images[0]);
              return (
                <div
                  key={`${project.title}-${index}`}
                  className="group relative bg-neutral-900 border border-white/10 hover:border-red-600/50 transition-all duration-500 overflow-hidden aspect-[4/3] cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <ImageWithFallback
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent pointer-events-none" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                    <h3
                      className="text-white text-xl lg:text-2xl mb-2 font-light tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
                      style={{ textAlign: 'left', textAlignLast: 'left' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-white text-sm uppercase tracking-[0.18em] font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                      style={{ textAlign: 'left', textAlignLast: 'left' }}
                    >
                      {project.location}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              );
            })}
          </div>

          {projects.length > FEATURED_PROJECTS.length && (
            <div className="flex justify-center mt-16 lg:mt-20">
              <button
                onClick={() => {
                  setShowAllProjects((prev) => !prev);
                  setCurrentProject(0);
                }}
                className="inline-flex items-center text-white/80 hover:text-red-600 transition-colors duration-300 group/btn leading-none"
                style={{ gap: 12 }}
              >
                <span className="w-5 h-5 shrink-0 rounded-full border border-white/80 group-hover/btn:border-red-600 inline-flex items-center justify-center transition-colors duration-300">
                  {showAllProjects ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider">
                  {showAllProjects ? 'Show Less' : 'Read More'}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden main-copy">
          <div className="relative px-0 overflow-visible">
            <div className="relative flex items-center justify-center overflow-visible">
              <div className="group absolute left-0 w-[30%] aspect-[4/3.5] bg-neutral-900/30 backdrop-blur-sm border border-white/20 scale-95 z-0 overflow-hidden opacity-80">
                <ImageWithFallback
                  src={
                    visibleProjects[
                      currentProject > 0 ? currentProject - 1 : visibleProjects.length - 1
                    ].images[0]
                  }
                  alt=""
                  className="w-full h-full object-cover opacity-70 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>

              <div
                className="group relative w-[75%] aspect-[4/3.5] bg-neutral-900 border-2 border-white/40 z-10 overflow-hidden shadow-2xl mx-auto cursor-pointer"
                onClick={() => {
                  const project = visibleProjects[currentProject];
                  const index = projects.findIndex(
                    (p) => p.title === project.title && p.images[0] === project.images[0]
                  );
                  openModal(index);
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-out z-10" />
                <ImageWithFallback
                  src={visibleProjects[currentProject].images[0]}
                  alt={visibleProjects[currentProject].title}
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="text-white text-xl mb-2 font-light tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
                    style={{ textAlign: 'left', textAlignLast: 'left' }}
                  >
                    {visibleProjects[currentProject].title}
                  </h3>
                  <p
                    className="text-white text-sm uppercase tracking-[0.18em] font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                    style={{ textAlign: 'left', textAlignLast: 'left' }}
                  >
                    {visibleProjects[currentProject].location}
                  </p>
                </div>
              </div>

              <div className="group absolute right-0 w-[30%] aspect-[4/3.5] bg-neutral-900/30 backdrop-blur-sm border border-white/20 scale-95 z-0 overflow-hidden opacity-80">
                <ImageWithFallback
                  src={
                    visibleProjects[
                      currentProject < visibleProjects.length - 1 ? currentProject + 1 : 0
                    ].images[0]
                  }
                  alt=""
                  className="w-full h-full object-cover opacity-70 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
            </div>

            <button
              onClick={prevProject}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group z-20"
            >
              <ChevronLeft className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group z-20"
            >
              <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {visibleProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentProject(i)}
                className={`h-1 transition-all duration-300 ${
                  i === currentProject ? 'w-12 bg-red-600' : 'w-8 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {projects.length > FEATURED_PROJECTS.length && (
            <div className="flex justify-center mt-14">
              <button
                onClick={() => {
                  setShowAllProjects((prev) => !prev);
                  setCurrentProject(0);
                }}
                className="inline-flex items-center text-white/80 hover:text-red-600 transition-colors duration-300 group/btn leading-none"
                style={{ gap: 12 }}
              >
                <span className="w-5 h-5 shrink-0 rounded-full border border-white/80 group-hover/btn:border-red-600 inline-flex items-center justify-center transition-colors duration-300">
                  {showAllProjects ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider">
                  {showAllProjects ? 'Show Less' : 'Read More'}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Clients — 2 logo tickers after projects / Show Less */}
        <div className="mt-16 lg:mt-20">
          <div className="bts-section-head mb-10 lg:mb-12">
            <h2 className="bts-title">Clients</h2>
            <div className="bts-bar-wrap">
              <div className="bts-bar" />
            </div>
          </div>

          <div className="clients-tickers relative -mx-8 lg:-mx-14">
            {/* Row 1 — scrolls left (two identical groups for seamless -50% loop) */}
            <div className="clients-ticker clients-ticker--left mb-6">
              <div className="clients-ticker__track">
                {[0, 1].map((copy) => (
                  <div key={`row1-${copy}`} className="clients-ticker__group" aria-hidden={copy === 1}>
                    {[capovitezLogo, chettinadLogo, enilLogo, galeriesLogo, howdenLogo, mirchiLogo, missIndiaLogo, nirmalLogo, parksydeLogo, adityaBirlaLogo].map((logo, index) => (
                      <div key={`${copy}-${index}`} className="clients-ticker__cell">
                        <img src={logo} alt="" className="clients-ticker__logo" draggable={false} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 — scrolls right */}
            <div className="clients-ticker clients-ticker--right">
              <div className="clients-ticker__track">
                {[0, 1].map((copy) => (
                  <div key={`row2-${copy}`} className="clients-ticker__group" aria-hidden={copy === 1}>
                    {[worldBankLogo, suttattiLogo, rahejaUniversalLogo, tableSpaceLogo, timesNetworkLogo, timesMusicLogo, timesGroupLogo, unileverFragranceLogo, ubsLogo, unileverLogo].map((logo, index) => (
                      <div key={`${copy}-${index}`} className="clients-ticker__cell">
                        <img src={logo} alt="" className="clients-ticker__logo" draggable={false} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Project Modal — portaled above header / page chrome */}
      {selectedProject !== null &&
        createPortal(
          <div
            className="project-modal flex items-center justify-center bg-black/70 backdrop-blur-md p-4 sm:p-6 lg:p-8 pt-16 sm:pt-6 animate-in fade-in duration-300"
            onClick={closeModal}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close project"
              className="project-modal__close w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group bg-black/80 shadow-lg"
            >
              <X className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
            </button>

            <div
              className="relative w-full max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Desktop: image left | text right · Mobile: image top, text below */}
              <div className="flex flex-col lg:flex-row lg:items-stretch max-h-[min(92vh,calc(100dvh-2rem))] bg-black border border-white/20 shadow-2xl overflow-hidden">
                <div
                  className="project-modal__stage relative lg:w-[58%] shrink-0"
                  onMouseEnter={() => setIsCarouselHovered(true)}
                  onMouseLeave={() => setIsCarouselHovered(false)}
                >
                  <img
                    className="project-modal__img"
                    src={projects[selectedProject].images[currentImageIndex]}
                    alt={`${projects[selectedProject].title} - Image ${currentImageIndex + 1}`}
                  />

                  {projects[selectedProject].images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-white/40 bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-white/40 bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                      </button>

                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10 pointer-events-none">
                        <div className="flex gap-2 pointer-events-auto">
                          {projects[selectedProject].images.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentImageIndex(i)}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                i === currentImageIndex ? 'w-8 bg-red-600' : 'w-1.5 bg-white/40 hover:bg-white/60'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="project-modal-copy p-8 lg:p-12 flex flex-col justify-center lg:w-[42%] border-t lg:border-t-0 lg:border-l border-white/10 overflow-y-auto">
                  <p className="text-white/50 text-sm uppercase tracking-wider mb-2 font-medium">
                    Client
                  </p>
                  <h3 className="text-3xl lg:text-4xl text-white font-semibold mb-2 tracking-tight">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-white/60 text-base mb-8 font-light">
                    {projects[selectedProject].type}
                  </p>

                  <div className="h-px w-16 bg-red-600 mb-8" />

                  <h4 className="text-white/40 uppercase tracking-widest text-xs font-semibold mb-6">
                    Fact File
                  </h4>

                  <div className="space-y-6">
                    <div className="border-l-2 border-red-600/30 pl-6">
                      <div className="text-white/40 text-xs uppercase tracking-wider mb-1 font-medium">
                        Location
                      </div>
                      <div className="text-white text-lg font-light">
                        {projects[selectedProject].location}
                      </div>
                    </div>

                    <div className="border-l-2 border-red-600/30 pl-6">
                      <div className="text-white/40 text-xs uppercase tracking-wider mb-1 font-medium">
                        Project Type
                      </div>
                      <div className="text-white text-lg font-light">
                        {projects[selectedProject].type}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}