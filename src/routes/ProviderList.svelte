<script>
  import { providers } from './providers';
</script>

<div class="container">
  {#each providers as provider}
    <div class="top"></div>
    <div class="row">
      <h2>{ provider.name }</h2>
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

  .row {
    width: 100%;
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