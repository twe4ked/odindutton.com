---
title: Pull (PostgreSQL) Database from Heroku to Your Development Environment
layout: post
---

There are a lot of examples of ways to automatically back up your PostgreSQL database on Heroku using the [PG Backups](http://addons.heroku.com/pgbackups "A PostgreSQL backup addon") and pushing them up to S3, then pulling them back into your local database. This offers a lot of flexibility but you need to have Amazon S3, and I don't.

## Looking for something simple to fit my needs

I found a [stackoverflow question](http://stackoverflow.com/questions/5649868/is-there-a-faster-way-to-pull-production-data-from-heroku-than-taps/5675869#5675869) that had a great answer from [Mike Williamson](http://stackoverflow.com/users/130006/mike-williamson) that [Jack Kinsella](http://stackoverflow.com/users/286286/jack-kinsella) made into a simple bash script.

## My solution

Jack's script was almost perfect but I made a few tweaks and thought I would share it here.

    #!/bin/bash

    heroku pgbackups:capture --expire

    function backup_url () {
      heroku pgbackups | tail -n 1 | cut -d'|' -f 1
    }

    echo 'Downloading backup...'
    curl $(heroku pgbackups:url $backup_url) > temporary_backup.dump
    echo 'Restoring backup...'
    pg_restore --clean --no-acl --no-owner -h localhost -d DATABASE temporary_backup.dump
    rm -f temporary_backup.dump
