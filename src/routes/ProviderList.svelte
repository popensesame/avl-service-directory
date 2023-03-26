<script>
  import { providers } from './providers';

  let visibleProviders = providers;

  const serviceTypes = providers.map(p => {
    return Array.from(new Set(p.services));
  }).flat();

  let selectedType = 'All Services';

  const filterProviders = () => {
    return providers.filter(p => {
      return p.services.indexOf(selectedType) > -1;
    });
  }

  $: visibleProviders = selectedType === 'All Services'
    ? providers
    : filterProviders();


</script>

<div class="container">
  <div class="container">
    <select bind:value={ selectedType } class="service-filter">
      <option value="All Services">All Services</option>
      {#each serviceTypes as service}
        <option value="{ service }">{ service }</option>
      {/each}
    </select>
  </div>
  {#each visibleProviders as provider}
    <div class="top"></div>
    <div class="row">
      <div class="row heading">
        <h2 class="provider-name">{ provider.name }</h2>
        {#if provider.website } 
          <a target="_blank" class="website-btn" href="{ provider.website }">Website</a>
        {/if}
      </div>
      <div class="contents">
        <div class="services">
          <ul class="service-list">
            {#each provider.services as service}
              <li>{ service }</li>
            {/each}
          </ul>
          {#if provider.description}
          <div class='service-description'>
            { provider.description }
          </div>
          {/if}
        </div>
        <div class="locations">
          {#if provider.locations}
            {#each provider.locations as location}
              <div class="location">
                <span style="font-weight: bold;">{#if location.name } { location.name } <br/> {/if}</span>
                {#if location.email }
                  <a href='mailto:{location.email}'>{location.email}</a> <br/>
                {/if}
                {#if location.phones }
                  {#each location.phones as phone }
                    <a href="tel:{phone}">{ phone }</a> <br/>
                  {/each}
                 {/if}
                {#if location.address } { location.address } <br/> {/if}
                {#if location.hours }
                  <div class="hours">
                    <span class="hours-title">Hours</span><br />
                    {#each location.hours as hours}
                      { hours } <br/>
                    {/each}
                  </div>
                {/if}
              </div>
            {/each}
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .container {
    width: 100%;
    line-height: 2;
    margin: 0 auto;
  }

  .service-filter {
    margin: 0 auto;
  }

  .row {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  .provider-name {
    flex: 11;
  }
  .website-btn {
    font-weight: bold;
    flex: 1;
    height: 2em;
    border-radius: 1em;
    padding-left: 1em;
    padding-right: 1em;
    text-align: center;
    background-color: blue;
    border: .5px solid black;
    text-decoration: none;
    color: white;
  }

  .location {
    margin-bottom: 1em;
  }

  .service-list {
    padding-inline-start: 20px;
    margin-top: 0px;
  }

  .hours-title {
    font-weight: bold;
    font-size: 0.85em;
  }

  .top {
    width: 100%;
    border-bottom: 1px solid black;
  }

  .contents {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		grid-gap: 1rem;
		margin: 0 0 0.2rem 0;
    border-bottom: 1px solid black;
    padding-bottom: 2em;
  }
</style>