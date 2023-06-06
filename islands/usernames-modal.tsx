import { tw } from 'twind';
import { useState } from 'preact/hooks';

function UsernamesModal() {
  const [discordID, setDiscordID] = useState<string>();

  // this math assumes that it is 2 month blocks every 6 hours being released.

  const numberID = parseInt(discordID ?? '0');
  const validID = numberID > 1420070400000;
  const creationDate = new Date(numberID / 4194304 + 1420070400000);
  const feburary2016NitroBatchRelease = new Date(1686011400 * 1000);
  const availableDate = new Date();

  const userMonth =
    creationDate.getMonth() + 1 + (creationDate.getFullYear() - 2016) * 12;
  const startMonth = 2;

  const hoursSinceRelease =
    (new Date().getTime() - feburary2016NitroBatchRelease.getTime()) /
    1000 /
    60 /
    60;

  const hoursRemaining =
    Math.ceil((userMonth - startMonth) / 2) * 6 - hoursSinceRelease - 1;

  availableDate.setTime(
    availableDate.getTime() + hoursRemaining * 60 * 60 * 1000
  );

  // prevent 1 second off, since every 6 hours at half the hour, this is fine.
  availableDate.setMinutes(30);
  availableDate.setSeconds(0);

  const timeUntil = availableDate.getTime() - new Date().getTime();

  return (
    <div class='bg-gray-800 rounded-xl border border-gray-700 flex justify-start items-center flex-col px-8 py-4 space-y-6'>
      <div>
        <h1 class='text-2xl text-gray-100'>
          Discord Username Availability Estimator
        </h1>
        <p class='text-sm text-gray-300 text-center'>
          When will you get access to discord's usernames?
        </p>
      </div>

      <div class='flex flex-col w-full '>
        <label for='discord-id' class='text-gray-300 text-sm space-y-1'>
          <a
            class='hover:underline hover:text-gray-200'
            target='_blank'
            href='https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-'
          >
            Discord ID
          </a>
          <input
            value={discordID}
            onInput={(e) => setDiscordID(e.currentTarget.value)}
            class='bg-gray-900 border border-gray-700 rounded-lg w-full px-4 py-2 text-gray-200'
          ></input>
        </label>
      </div>

      <div
        class={tw`text-gray-200 text-sm text-center ${!validID && 'hidden'}`}
      >
        <p>We expect your username access to be available in</p>
        <p class='font-bold'>
          {Math.floor(timeUntil / (1000 * 60 * 60))} hours,{' '}
          {Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60))} minutes
        </p>
        <p class='font-bold'>
          {`${availableDate.toLocaleDateString()} ${availableDate.toLocaleTimeString()}`}
        </p>
      </div>
    </div>
  );
}

export default UsernamesModal;
