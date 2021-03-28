import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { AppModule } from '../../app.module';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('SidebarComponent', () => {
    let sidebarComponent: SidebarComponent;
    let sidebarFixture: ComponentFixture<SidebarComponent>;
    let loader: HarnessLoader;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SidebarComponent],
            imports: [AppModule]
        }).compileComponents();

        sidebarFixture = TestBed.createComponent(SidebarComponent);
        sidebarComponent = sidebarFixture.componentInstance;
        sidebarFixture.detectChanges();
        loader = TestbedHarnessEnvironment.loader(sidebarFixture);
    });

    it('should create', () => {
        expect(sidebarComponent).toBeTruthy();
    });
});
