using AdminDashTemplate.Server.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddCors(options =>
{
    options.AddPolicy("BlazorClientPolicy",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddControllers();
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();
builder.Services.AddHttpClient();

builder.Services.AddDbContext<AVRContext>(options =>
    options.UseSqlServer("Server=tcp:avrservice.database.windows.net,1433;Initial Catalog=BlazorStore;Persist Security Info=False;User ID=rob;Password=Rocket000!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"));

var app = builder.Build();

// CRITICAL: Log that server is starting
Console.WriteLine("========================================");
Console.WriteLine("SERVER PROJECT IS RUNNING!");
Console.WriteLine($"Environment: {app.Environment.EnvironmentName}");
Console.WriteLine($"Content Root: {app.Environment.ContentRootPath}");
Console.WriteLine($"Time: {DateTime.Now}");
Console.WriteLine("========================================");

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseWebAssemblyDebugging();
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseHsts();
}

app.UseHttpsRedirection();

// IMPORTANT: Routing must come first
app.UseRouting();

// CORS must come after UseRouting
app.UseCors("BlazorClientPolicy");

// Map API controllers BEFORE Blazor files
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapRazorPages();
});

// Debug: List all registered endpoints
Console.WriteLine("\n========== REGISTERED ENDPOINTS ==========");
var endpointDataSource = app.Services.GetRequiredService<Microsoft.AspNetCore.Routing.EndpointDataSource>();
foreach (var endpoint in endpointDataSource.Endpoints)
{
    if (endpoint is Microsoft.AspNetCore.Routing.RouteEndpoint routeEndpoint)
    {
        Console.WriteLine($"Route: {routeEndpoint.RoutePattern.RawText}");
    }
}
Console.WriteLine("==========================================\n");

// Blazor WebAssembly hosting - these must come AFTER controllers
app.UseBlazorFrameworkFiles();
app.UseStaticFiles();

// Fallback MUST be absolute last
app.MapFallbackToFile("index.html");

Console.WriteLine("Server is ready to accept requests!");

app.Run();
