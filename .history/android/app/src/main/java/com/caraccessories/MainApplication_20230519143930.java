package com.caraccessories;




import com.codezlab.http_logger.HttpLogger;
import com.facebook.react.modules.network.OkHttpClientFactory;
import com.facebook.react.modules.network.OkHttpClientProvider;
import com.facebook.react.modules.network.ReactCookieJarContainer;
import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import java.util.concurrent.TimeUnit;
import android.app.Application;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.soloader.SoLoader;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new DefaultReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

        @Override
        protected boolean isNewArchEnabled() {
          return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
        }

        @Override
        protected Boolean isHermesEnabled() {
          return BuildConfig.IS_HERMES_ENABLED;
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      DefaultNewArchitectureEntryPoint.load();
    }
    ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());

    try {
      OkHttpClientProvider.setOkHttpClientFactory(new OkHttpClientFactory() {
          @Override
          public OkHttpClient createNewNetworkModuleClient() {
              OkHttpClient.Builder client = new OkHttpClient.Builder()
                      .connectTimeout(0, TimeUnit.MILLISECONDS)
                      .readTimeout(0, TimeUnit.MILLISECONDS)
                      .writeTimeout(0, TimeUnit.MILLISECONDS)
                      .cookieJar(new ReactCookieJarContainer());
                 HttpLoggingInterceptor loggingInterceptor = new HttpLoggingInterceptor();
                  loggingInterceptor.setLevel(HttpLoggingInterceptor.Level.HEADERS);
                  loggingInterceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
                  client.addInterceptor(loggingInterceptor);
                  client.addInterceptor(new HttpLogger(MainApplication.this));
            
              return client.build();
          }
      });
  } catch (Exception e) {
      Log.e(MainApplication.class.getSimpleName(), e.toString());
  }

  }
}
