import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPageComponent } from './search-page.component';
import { AppModule } from '../../app.module';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('ContentComponent', () => {
    let contentComponent: SearchPageComponent;
    let contentFixture: ComponentFixture<SearchPageComponent>;
    let loader: HarnessLoader;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchPageComponent],
            imports: [AppModule]
        }).compileComponents();

        contentFixture = TestBed.createComponent(SearchPageComponent);
        contentComponent = contentFixture.componentInstance;
        contentFixture.detectChanges();
        loader = TestbedHarnessEnvironment.loader(contentFixture);
    });

    it('should create', () => {
        expect(contentComponent).toBeTruthy();
    });
});
