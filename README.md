# Welcome to your GPT Engineer project

## Project info

**Project**: weapon-analytics-hub 

**URL**: https://run.gptengineer.app/projects/78555b8c-6ca8-434d-997e-0f6b07ec929c/improve

**Description**: I want to build a web application that will use connection to my postgres db called DIMAnalyzer to pull in data for review and anlysis. The tables in the db are alld2weapons, perksrank, statsrank and weapondata.  The weapondata table has my current weapons in my inventory with the following columns:     name character varying(255) COLLATE pg_catalog."default",
    hash bigint,
    id character varying(255) COLLATE pg_catalog."default" NOT NULL,
    tag character varying(255) COLLATE pg_catalog."default",
    tier character varying(255) COLLATE pg_catalog."default",
    type character varying(255) COLLATE pg_catalog."default",
    source character varying(255) COLLATE pg_catalog."default",
    category character varying(255) COLLATE pg_catalog."default",
    element character varying(255) COLLATE pg_catalog."default",
    power integer,
    masterworktype character varying(255) COLLATE pg_catalog."default",
    masterworktier integer,
    owner character varying(255) COLLATE pg_catalog."default",
    locked boolean,
    equipped boolean,
    year integer,
    season integer,
    event character varying(255) COLLATE pg_catalog."default",
    recoil integer,
    aa integer,
    impact integer,
    range integer,
    zoom integer,
    blastradius integer,
    velocity integer,
    stability integer,
    rof integer,
    reload integer,
    mag integer,
    handling integer,
    chargetime integer,
    drawtime integer,
    accuracy integer,
    chargerate integer,
    guardresistance integer,
    guardefficiency integer,
    guardendurance integer,
    swingspeed integer,
    shieldduration integer,
    airborneeffectiveness integer,
    crafted text COLLATE pg_catalog."default",
    craftedlevel integer,
    killtracker integer,
    foundry character varying(255) COLLATE pg_catalog."default",
    loadouts character varying(255) COLLATE pg_catalog."default",
    notes text COLLATE pg_catalog."default",
    perks_0 character varying(255) COLLATE pg_catalog."default",
    perks_1 character varying(255) COLLATE pg_catalog."default",
    perks_2 character varying(255) COLLATE pg_catalog."default",
    perks_3 character varying(255) COLLATE pg_catalog."default",
    perks_4 character varying(255) COLLATE pg_catalog."default",
    perks_5 character varying(255) COLLATE pg_catalog."default",
    perks_6 character varying(255) COLLATE pg_catalog."default",
    perks_7 character varying(255) COLLATE pg_catalog."default",
    perks_8 character varying(255) COLLATE pg_catalog."default",
    perks_9 character varying(255) COLLATE pg_catalog."default",
    perks_10 character varying(255) COLLATE pg_catalog."default",
    perks_11 character varying(255) COLLATE pg_catalog."default",
    perks_12 character varying(255) COLLATE pg_catalog."default",
    perks_13 character varying(255) COLLATE pg_catalog."default",
    perks_14 character varying(255) COLLATE pg_catalog."default"  I want to be able to review and select any single or multiple weapons for other actions like moving them to another character or generating a DIM query etc..   We will also use the other tables to help provide insight into the grading of the weapons.  perksrank table has:     bungieitemid bigint NOT NULL,
    perkmodcat text COLLATE pg_catalog."default" NOT NULL,
    perkmodcatname text COLLATE pg_catalog."default" NOT NULL,
    perkmodcatrank integer,
    weight numeric(5,4) and the statsrank table has:     weapon_type character varying(50) COLLATE pg_catalog."default",
    stat character varying(50) COLLATE pg_catalog."default",
    pve_stat_rank integer,
    pvp_stat_rank integer.. The statsrank table can be used to show which stats are most important when joined to from the weapon_type column of the type column of weapondata.  

## Who is the owner of this repository?
By default, GPT Engineer projects are created with public GitHub repositories.

However, you can easily transfer the repository to your own GitHub account by navigating to your [GPT Engineer project](https://run.gptengineer.app/projects/78555b8c-6ca8-434d-997e-0f6b07ec929c/improve) and selecting Settings -> GitHub. 

## How can I edit this code?
There are several ways of editing your application.

**Use GPT Engineer**

Simply visit the GPT Engineer project at [GPT Engineer](https://run.gptengineer.app/projects/78555b8c-6ca8-434d-997e-0f6b07ec929c/improve) and start prompting.

Changes made via gptengineer.app will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the GPT Engineer UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps: 

```sh
git clone https://github.com/GPT-Engineer-App/weapon-analytics-hub.git
cd weapon-analytics-hub
npm i

# This will run a dev server with auto reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

All GPT Engineer projects can be deployed directly via the GPT Engineer app. 

Simply visit your project at [GPT Engineer](https://run.gptengineer.app/projects/78555b8c-6ca8-434d-997e-0f6b07ec929c/improve) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain, then we recommend GitHub Pages.

To use GitHub Pages you will need to follow these steps: 
- Deploy your project using GitHub Pages - instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
- Configure a custom domain for your GitHub Pages site - instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)